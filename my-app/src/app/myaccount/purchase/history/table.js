'use client'

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip } from "@nextui-org/react";
import { columns, purchases } from "@/constants/purchase";

const statusColorMap = {
  processing: "secondary",
  shipping: "primary",
  completed: "success",
  cancelled: "danger",
  delayed: "secondary",
};

export default function PurchaseHistoryTable() {
  const renderCell = React.useCallback((purchase, columnKey) => {
    const cellValue = purchase[columnKey];

    switch (columnKey) {
      case "productID":
        return (
          <p>{purchase.producID}</p>
        );
      case "name":
        return (
          <div className="flex flex-col">
            <p>{purchase.name}</p>
            <p className="text-xs">{purchase.description}</p>
          </div>
        );
      case "quantity":
        return (
          <p>{purchase.quantity}</p>
        );
      case "totalPrice":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{purchase.quantity * purchase.pricePerProduct}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[purchase.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <i className="pi pi-eye"></i>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table isStriped aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={purchases}>
        {(item) => (
          <TableRow key={item.producID}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}