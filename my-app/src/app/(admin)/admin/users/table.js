'use client'

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button, useDisclosure } from "@nextui-org/react";
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
  const [userId, setUserId] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  // User data
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

  const [selectedUserDetails, setSelectedUserDetails] = React.useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = React.useState(false);
  const fetchUserDetails = async (userId) => {
    const response = await axios.get(`http://localhost/test/admin/detail.php?id=${userId}`);
    setSelectedUserDetails(response.data);
    setDetailsModalOpen(true);
  };

  const [editModalOpen, setEditModalOpen] = React.useState(false);
  async function handleEditSubmit(event) {
    event.preventDefault();

    const userData = {
      id: userId,
      fName,
      lName,
      email,
      phone,
      birthdate,
      username,
      password,
    };

    const response = await axios.post('http://localhost/test/admin/update.php', userData);

    if (response.data.status === 'success') {
      alert('Update successful');
      setEditModalOpen(false);  // Close the modal
      // Refresh the user data
      const updatedUsers = users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            firstname: fName,
            lastname: lName,
            email,
            phone,
            birthdate,
            username,
            password,
          };
        }
        return user;
      });
      setUsers(updatedUsers);
    } else {
      alert(response.data.message);
    }
  }

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [userToDelete, setUserToDelete] = React.useState(null);

  // Add a new function to handle user deletion
  async function handleDeleteUser() {
    const response = await axios.get(`http://localhost/test/admin/deleteUser.php?id=${userToDelete.id}`);

    if (response.data.status === 'success') {
      alert('User deleted successfully');
      setDeleteModalOpen(false);  // Close the modal
      // Refresh the user data
      const updatedUsers = users.filter(user => user.id !== userToDelete.id);
      setUsers(updatedUsers);
    } else {
      alert(response.data.message);
    }
  }

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
      birthdate,
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
      case "userID":
        return (
          <p>{user.userID}</p>
        );
      case "name":
        return (
          <div className="flex flex-col">
            <p>{user.name}</p>
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
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => fetchUserDetails(user.userID)}>
                <i className="pi pi-eye"></i>
              </span>
            </Tooltip>

            <Tooltip content="Edit">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => {
                  console.log(user);
                  setUserId(user.id);
                  setFName(user.firstname);
                  setLName(user.lastname);
                  setEmail(user.email);
                  setPhone(user.phone);
                  setBirthdate(user.birthdate);
                  setUsername(user.username);
                  setPassword('');
                  setEditModalOpen(true);
                }}
              >
                <i className="pi pi-pen-to-square"></i>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => {
                  setUserToDelete(user);
                  setDeleteModalOpen(true);
                }}
              >
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
                          <Input type="date" name="birthdate" label="Date of Birth" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
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
      <Modal isOpen={detailsModalOpen} onOpenChange={setDetailsModalOpen}>
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalBody>
            {selectedUserDetails ? (
              <div>
                <p>ID: {selectedUserDetails.id}</p>
                <p>Name: {selectedUserDetails.firstname} {selectedUserDetails.lastname}</p>
                <p>Email: {selectedUserDetails.email}</p>
                <p>Phone: {selectedUserDetails.phone}</p>
                <p>Birthdate: {new Date(selectedUserDetails.birthdate).toLocaleDateString()}</p>
                <p>Username: {selectedUserDetails.username}</p>
                <p>Password: {selectedUserDetails.password}</p>
                <p>Date Registered: {new Date(selectedUserDetails.created_at).toLocaleDateString()}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onPress={() => setDetailsModalOpen(false)}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={editModalOpen} onOpenChange={setEditModalOpen}>
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <form onSubmit={handleEditSubmit}>
            <ModalBody>
              <div className="flex flex-row gap-2">
                <Input type="text" name="fName" label="First name" value={fName} onChange={(e) => setFName(e.target.value)} />
                <Input type="text" name="lName" label="Last name" value={lName} onChange={(e) => setLName(e.target.value)} />
              </div>
              <Input type="email" name="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input type="text" name="phone" label="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <Input type="date" name="birthdate" label="Date of Birth" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
              <Input type="text" name="username" label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input type="password" name="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={() => setEditModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <Modal isOpen={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <ModalContent>
          <ModalHeader>Delete User</ModalHeader>
          <ModalBody>
            {userToDelete ? (
              <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
                <h2 style={{ color: '#333', marginBottom: '20px' }}>Confirm Deletion</h2>
                <p style={{ marginBottom: '10px' }}>Are you sure you want to delete the following user?</p>
                <span style={{ color: 'red', marginBottom: '20px', display: 'block' }}>This action cannot be undone.</span>
                <p><strong>ID:</strong> {userToDelete.id}</p>
                <p><strong>Name:</strong> {userToDelete.firstname} {userToDelete.lastname}</p>
                <p><strong>Email:</strong> {userToDelete.email}</p>
                <p><strong>Phone:</strong> {userToDelete.phone}</p>
                <p><strong>Username:</strong> {userToDelete.username}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
            <Button color="danger" onPress={handleDeleteUser}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  );
}