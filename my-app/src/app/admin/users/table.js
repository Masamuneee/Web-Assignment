'use client'

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button } from "@nextui-org/react";
import { columns, users } from "@/constants/userDatabase";

const statusColorMap = {
  processing: "secondary",
  shipping: "primary",
  completed: "success",
  cancelled: "danger",
  delayed: "warning",
};

export default function UsersTable() {
  const [filterValue, setFilterValue] = React.useState("");
  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }

    return filteredUsers;
  }, [users, filterValue]);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 15;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "userID":
        return (
          <p>{user.userID}</p>
        );
      case "name":
        return (
          <div className="flex flex-col">
            <p>{user.name}</p>
            <p className="text-xs">{user.gender}</p>
          </div>
        );
      case "email":
        return (
          <p>{user.email}</p>
        );
      case "phone":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user.phone}</p>
          </div>
        );
      case "username":
        return (
          <p>{user.username}</p>
        );
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

  return (
    <Table
      isStriped
      isHeaderSticky
      classNames={{
        wrapper: "!max-h-[calc(100vh-250px)]",
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
              color="primary"
              endContent={<i className="pi pi-plus"></i>}
            >
              Add
            </Button>
          </div>
          <Chip color="default" size="sm">Total {users.length} users</Chip>
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
          <TableRow key={item.userID}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}