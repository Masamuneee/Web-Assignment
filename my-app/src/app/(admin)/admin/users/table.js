'use client'

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button, useDisclosure, User } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import axios from 'axios';
import { columns } from "@/constants/userDatabase";

const statusColorMap = {
  processing: "secondary",
  shipping: "primary",
  completed: "success",
  cancelled: "danger",
  delayed: "warning",
};

export default function UsersTable() {
  const [username, setUsername] = React.useState("");
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('http://localhost/test/admin/users.php');
      const usersWithExtraFields = response.data.map(user => ({
        ...user,
        userID: `${user.id}`,
        name: `${user.firstname} ${user.lastname}`,
        dateRegistered: new Date(user.created_at).toLocaleDateString(),
      }));

      setUsers(usersWithExtraFields);
    }

    fetchUsers();
  }, []);


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
  }, [users, filterValue, hasSearchFilter]);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await axios.post('http://localhost/test/auth/register.php', {
      fName,
      lName,
      email,
      phone,
      birthday,
      username,
      password,
    });

    if (response.data.status === 'success') {
      alert('Sign up successful');
      router.push('/admin/users');
    } else {
      alert(response.data.message);
    }
  }

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
              backdrop="blur"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col">New User</ModalHeader>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                      <ModalBody>
                        <div className="flex flex-row gap-2">
                          <Input type="text" name="fName" label="First name" value={fName} onChange={(e) => setFName(e.target.value)} />
                          <Input type="text" name="lName" label="Last name" value={lName} onChange={(e) => setLName(e.target.value)} />
                        </div>
                        <Input type="email" name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input type="text" name="phone" label="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <Input type="date" name="birthday" label="Date of Birth" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                        <Input type="text" name="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <Input type="password" name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                          Cancel
                        </Button>
                        <Button type="submit" color="primary" onPress={onClose}>
                          Add
                        </Button>
                      </ModalFooter>
                    </form>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
          <Chip color="default" size="sm">Total {filteredItems.length} users</Chip>
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

