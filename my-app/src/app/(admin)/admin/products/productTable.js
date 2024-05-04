'use client'

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button, useDisclosure } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";
import { products, statusColorMap } from "@/database/products";
import { Textarea } from "@nextui-org/input";

const columns = [
  { name: "ID", uid: "productID" },
  { name: "NAME", uid: "name" },
  { name: "ARTIST", uid: "artist" },
  { name: "GENRE", uid: "genre" },
  { name: "PRICE", uid: "price" },
  { name: "IMAGE", uid: "image" },
  { name: "STATUS", uid: "status"},
  { name: "ACTIONS", uid: "actions" },
];

export default function ProductsTable() {
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
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <i className="pi pi-eye"></i>
              </span>
            </Tooltip>
            <Tooltip content="Edit">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <i className="pi pi-pen-to-square"></i>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
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
                    <ModalBody>
                      <form method="POST" className="flex flex-col gap-2">
                        <Input type="text" name="name" label="Name" />
                        <div className="flex flex-row gap-2">
                          <Input type="text" name="artist" label="Artist" />
                          <Input type="text" name="genre" label="Genre" />
                        </div>
                        <Textarea
                          label="Description"
                          placeholder="Enter product description"
                        />
                        <div className="flex flex-row gap-2">
                          <Input type="number" name="price" label="Price" />
                          <Input type="text" name="status" label="Status" />
                        </div>
                        <input id="file-upload" type="file" />
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Cancel
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Add
                      </Button>
                    </ModalFooter>
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
  );
}