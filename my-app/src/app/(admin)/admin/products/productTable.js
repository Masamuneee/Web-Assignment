'use client'

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button, useDisclosure } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { statusColorMap } from "@/database/products";
import { Textarea } from "@nextui-org/input";
import axios from "axios";
import { useRouter } from "next/navigation";

const columns = [
  { name: "ID", uid: "productID" },
  { name: "NAME", uid: "name" },
  { name: "ARTIST", uid: "artist" },
  { name: "GENRE", uid: "genre" },
  { name: "PRICE", uid: "price" },
  { name: "IMAGE", uid: "image" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];




export default function ProductsTable() {
  const [products, setProducts] = React.useState([]);
  const [id, setId] = React.useState(0);
  const [name, setName] = React.useState("");
  const [artist, setArtist] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");
  const [status, setStatus] = React.useState("");
  const router = useRouter();


  React.useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get('http://localhost/test/admin/products.php');
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  const [DetailsProducts, setDetailsProducts] = React.useState(null);
  const [detailModalOpen, setDetailModalOpen] = React.useState(false);
  const fetchProductsDetails = async (id) => {
    const response = await axios.get(`http://localhost/test/admin/products-detail.php?id=${id}`);
    setDetailsProducts(response.data);
    setDetailModalOpen(true);
  }

  const [editModalOpen, setEditModalOpen] = React.useState(false);
  async function handleEditSubmit(event) {
    event.preventDefault();

    setId(DetailsProducts.productID);

    const data = {
      id: id,
      name,
      artist,
      genre,
      price,
      description,
      image,
      status
    };

    const response = await axios.post('http://localhost/test/admin/products-edit.php', data);

    if (response.data.status === "success") {
      alert("Product edited successfully");
      setEditModalOpen(false);

      const newProducts = products.map((product) => {
        if (product.productID === id) {
          return {
            ...product,
            name,
            artist,
            genre,
            price,
            description,
            image,
            status
          };
        }
        return product;
      });
      setProducts(newProducts);

    } else {
      alert("Failed to edit product");
    }
  }

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [productToDelete, setProductToDelete] = React.useState(null);

  async function handleDelete() {
    const response = await axios.get(`http://localhost/test/admin/products-delete.php?id=${productToDelete.productID}`);

    if (response.data === "success") {
      alert("Product deleted successfully");
      setDeleteModalOpen(false);
      // Refresh the products list
      const newProducts = products.filter((product) => product.productID !== productToDelete.productID);
      setProducts(newProducts);
    } else {
      alert(response.data.message);
    }
  }

  const [filterValue, setFilterValue] = React.useState("");
  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredProducts = [...products];

    if (hasSearchFilter) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredProducts;
  }, [products, filterValue, hasSearchFilter]);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post('http://localhost/test/admin/products-add.php', {
      name,
      artist,
      genre,
      price,
      description,
      image,
      status
    });

    if (response.data === "success") {
      alert("Product added successfully");
      router.pust('/admin/products');
    }
    else {
      alert(response.data.message);
    }
  }

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 15;

  const pages = Math.ceil(products.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  const renderCell = React.useCallback((product, columnKey) => {
    const cellValue = product[columnKey];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => fetchProductsDetails(product.productID)}>
                <i className="pi pi-eye"></i>
              </span>
            </Tooltip>
            <Tooltip content="Edit">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  setName(product.name);
                  setArtist(product.artist);
                  setGenre(product.genre);
                  setPrice(product.price);
                  setDescription(product.description);
                  setImage(product.image);
                  setStatus(product.status);
                  setEditModalOpen(true);
                }}
              >
                <i className="pi pi-pen-to-square"></i>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => {
                  setProductToDelete(product);
                  setDeleteModalOpen(true);
                }}
              >
                <i className="pi pi-trash"></i>
              </span>
            </Tooltip>
          </div>
        );
      case "price":
        return (
          <p>${cellValue}</p>
        );
      case "image":
        return (
          <img
            src={"/" + cellValue}
            alt={product.name}
            className="w-12 h-12 rounded-lg object-cover"
          />
        );
      case "status":
        return (
          <Chip color={statusColorMap[cellValue]} size="sm">
            {cellValue.toUpperCase()}
          </Chip>
        )
      default:
        return cellValue;
    }
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    }
    else {
      setFilterValue("");
    }
  })

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Table
        isStriped
        isHeaderSticky
        classNames={{
          wrapper: "!max-h-[calc(100vh-320px)]",
        }}
        aria-label="Example table with custom cells"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        bottomContentPlacement="outside"
        topContent={
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center">
              <Input
                isClearable
                type="text"
                placeholder="Search by name..."
                startContent={
                  <i className="pi pi-search"></i>
                }
                value={filterValue}
                onValueChange={onSearchChange}
                className="max-w-[44%]"
              />
              <Button
                onPress={onOpen}
                color="primary"
                endContent={<i className="pi pi-plus"></i>}
              >
                Add
              </Button>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col">New Product</ModalHeader>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <ModalBody>
                          <Input type="text" name="name" label="Name" value={name} onValueChange={setName} />
                          <div className="flex flex-row gap-2">
                            <Input type="text" name="artist" label="Artist" value={artist} onValueChange={setArtist} />
                            <Input type="text" name="genre" label="Genre" value={genre} onValueChange={setGenre} />
                          </div>
                          <Textarea name="description" rows={4} label="Description" value={description} onValueChange={setDescription} />
                          <div className="flex flex-row gap-2">
                            <Input type="number" name="price" label="Price" value={price} onValueChange={setPrice} />
                            <Input type="text" name="status" label="Status" value={status} onValueChange={setStatus} />
                          </div>
                          <Input type="text" name="image" label="Image" value={image} onValueChange={setImage} placeholder="default-image.jpg" />
                        </ModalBody>
                        <ModalFooter>
                          <Button color="danger" variant="flat" onPress={onClose}>
                            Cancel
                          </Button>
                          <Button color="primary" type="submit" onPress={onClose}>
                            Add
                          </Button>
                        </ModalFooter>
                      </form>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
            <Chip color="default" size="sm">Total {filteredItems.length} products</Chip>
          </div>
        }
        topContentPlacement="outside"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.productID}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal isOpen={detailModalOpen} onOpenChange={setDetailModalOpen}>
        <ModalContent>
          <ModalHeader>Product Details</ModalHeader>
          <ModalBody>
            {DetailsProducts ? (
              <div className="flex flex-col gap-4">
                <img
                  src={"/" + DetailsProducts.image}
                  alt={DetailsProducts.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <p>ID: {DetailsProducts.productID}</p>
                <p>Name: {DetailsProducts.name}</p>
                <p>Artist: {DetailsProducts.artist}</p>
                <p>Genre: {DetailsProducts.genre}</p>
                <p>Price: ${DetailsProducts.price}</p>
                <p>Status: {DetailsProducts.status}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={() => setDetailModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={editModalOpen} onOpenChange={setEditModalOpen}>
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <form onSubmit={handleEditSubmit} className="flex flex-col gap-2">
            <ModalBody>
              <div className="flex flex-col gap-2">
                <Input type="text" name="name" label="Name" value={name} onValueChange={setName} />
                <div className="flex flex-row gap-2">
                  <Input type="text" name="artist" label="Artist" value={artist} onValueChange={setArtist} />
                  <Input type="text" name="genre" label="Genre" value={genre} onValueChange={setGenre} />
                </div>
                <Textarea name="description" rows={4} label="Description" value={description} onValueChange={setDescription} />
                <div className="flex flex-row gap-2">
                  <Input type="number" name="price" label="Price" value={price} onValueChange={setPrice} />
                  <Input type="text" name="status" label="Status" value={status} onValueChange={setStatus} />
                </div>
                <Input type="text" name="image" label="Image" value={image} onValueChange={setImage} placeholder="default-image.jpg" />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={() => setEditModalOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Edit
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <Modal isOpen={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <ModalContent>
          <ModalHeader>Delete Product</ModalHeader>
          <ModalBody>
            {productToDelete ? (
              <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>Confirm Deletion</h2>
                <p style={{ color: '#333' }}>Are you sure you want to delete following the product ?</p>
                <span style={{ color: 'red', marginBottom: '20px', display: 'block' }}>This action cannot be undone.</span>
                <p><strong>Name:</strong> {productToDelete.name}</p>
                <p><strong>Artist:</strong> {productToDelete.artist}</p>
                <p><strong>Genre:</strong> {productToDelete.genre}</p>
                <p><strong>Price:</strong> ${productToDelete.price}</p>
                <p><strong>Status:</strong> {productToDelete.status}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button color="danger" onPress={handleDelete}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}