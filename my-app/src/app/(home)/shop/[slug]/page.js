'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

import { products, statusColorMap } from "@/database/products";
import { createSlug } from "@/utils/createSlug";

const columns = [
  {
    key: "id",
    label: "TRACK NUMBER",
  },
  {
    key: "name",
    label: "NAME",
  },
];

export default function DetailPage({ params }) {
  const Slug = params.slug;
  const product = products.find((product) => createSlug(product.image) === Slug);
  const [quantity, setQuantity] = React.useState(0);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    setQuantity(quantity - 1);
  };

  return (
    <div className="bg-white w-full mt-12">
      <div className="flex flex-col md:flex-row gap-5 md:gap-12 max-w-screen-xl mx-auto px-4">
        <div className="w-full md:w-1/2 mx-auto overflow-hidden">
          <img src={"/" + product.image} alt="hero" className="w-full rounded-2xl" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black">{product.name}</h1>
            <div className="flex gap-2">
              <Chip size="sm" color="primary" variant="solid">{product.artist}</Chip>
              <Chip size="sm" color="primary" variant="bordered">{product.genre}</Chip>
              <Chip size="sm" color={statusColorMap[product.status]} variant="solid">{product.status.charAt(0).toLocaleUpperCase() + product.status.slice(1)}</Chip>
            </div>
          </div>
          <p className="font-black text-2xl">${product.price}</p>
          <div className="w-full flex flex-row items-center">
            <div className="flex flex-row items-center mr-6">
              <Button onClick={decrement} isDisabled={quantity == 0 ? true : false} isIconOnly color="primary" radius="full" className="mr-2 w-full">
                <span className="pi pi-minus"></span>
              </Button>
              <div>{quantity}</div>
              <Button onClick={increment} isDisabled={quantity == 20 ? true : false} isIconOnly color="primary" radius="full" className="ml-2">
                <span className="pi pi-plus"></span>
              </Button>
            </div>
            <Button color="primary" radius="full" className="w-full">Add to cart</Button>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">Description</h1>
            <p className="text-sm">
              {product.description}
            </p>
          </div>
          <Table removeWrapper>
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={product.tracklist}>
              {(item) => (
                <TableRow key={item.key}>
                  {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}