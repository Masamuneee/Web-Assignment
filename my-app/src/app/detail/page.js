'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const rows = [
  {
    id: "1",
    name: "Welcome To New York (Taylor's Version)",
  },
  {
    id: "2",
    name: "Blank Space (Taylor's Version)",
  },
  {
    id: "3",
    name: "Style (Taylor's Version)",
  },
  {
    id: "4",
    name: "Out Of The Woods (Taylor's Version)",
  },
  {
    id: "5",
    name: "All You Had To Do Was Stay (Taylor's Version)",
  },
  {
    id: "6",
    name: "Shake It Off (Taylor's Version)",
  },
  {
    id: "7",
    name: "I Wish You Would (Taylor's Version)",
  },
  {
    id: "8",
    name: "Bad Blood (Taylor's Version)",
  },
  {
    id: "9",
    name: "Wildest Dreams (Taylor's Version)",
  },
  {
    id: "10",
    name: "How You Get The Girl (Taylor's Version)",
  },
  {
    id: "11",
    name: "This Love (Taylor's Version)",
  },
  {
    id: "12",
    name: "I Know Places (Taylor's Version)",
  },
  {
    id: "13",
    name: "Clean (Taylor's Version)",
  },
  {
    id: "14",
    name: "Wonderland (Taylor's Version)",
  },
  {
    id: "15",
    name: "You Are In Love (Taylor's Version)",
  },
  {
    id: "16",
    name: "New Romantics (Taylor's Version)",
  },
  {
    id: "17",
    name: "\"Slut!\" (Taylor\'s Version) (From The Vault)",
  },
  {
    id: "18",
    name: "Say Don't Go (Taylor's Version) (From The Vault)",
  },
  {
    id: "19",
    name: "Now That We Don't Talk (Taylor's Version) (From The Vault)",
  },
  {
    id: "20",
    name: "Suburban Legends (Taylor's Version) (From The Vault)",
  },
  {
    id: "21",
    name: "Is It Over Now? (Taylor's Version) (From The Vault)",
  },
  {
    id: "22",
    name: "Sweeter Than Fiction (Taylor’s Version)",
  }
];

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

export default function Detail() {
  const [quantity, setQuantity] = React.useState(0);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    setQuantity(quantity - 1);
  };

  return (
    <div className="bg-white w-full mt-12">
      <div className="flex flex-row gap-12 max-w-screen-xl mx-auto">
        <div className="w-1/2">
          <img src="taylor_swift-1989TV.jpg" alt="hero" className="w-full" />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-black">1989 (TAYLOR'S VERSION)</h1>
            <div className="flex gap-2">
              <Chip size="sm" color="primary" variant="solid">Taylor Swift</Chip>
              <Chip size="sm" color="primary" variant="bordered">Pop</Chip>
            </div>
          </div>
          <p className="font-black text-2xl">$49.99</p>
          <div className="w-full flex flex-row items-center">
            <div className="flex flex-row items-center mr-6">
              <Button onClick={decrement} isIconOnly color="primary" radius="full" className="mr-2 w-full">
                <span className="pi pi-minus"></span>
              </Button>
              <div>{quantity}</div>
              <Button onClick={increment} isIconOnly color="primary" radius="full" className="ml-2">
                <span className="pi pi-plus"></span>
              </Button>
            </div>
            <Button color="primary" radius="full" className="w-full">Add to cart</Button>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">Description</h1>
            <p className="text-sm">
              1989 (Taylor's Version) is the fourth re-recorded album by the American singer-songwriter Taylor Swift. It is a re-recording of Swift's fifth studio album, 1989 (2014), and was released on October 27, 2023, by Republic Records. The album is part of Swift's ongoing response to a 2019 dispute regarding the masters of her back catalog. It was announced at the final Los Angeles show of the Eras Tour on August 9, 2023.
            </p>
          </div>
          <Table removeWrapper>
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={rows}>
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