const columns = [
  { name: "ID", uid: "userID" },
  { name: "NAME", uid: "name" },
  /* { name: "GENDER", uid: "gender" }, */
  { name: "EMAIL", uid: "email" },
  { name: "PHONE", uid: "phone" },
  { name: "USERNAME", uid: "username" },
  { name: "DATE_REGISTERED", uid: "dateRegistered" },
]

const users = [
  {
    userID: 2150001,
    name: "Pham Quang Minh",
    gender: "Male",
    email: "quangminh@gmail.com",
    phone: "0987654321",
    username: "quangminh",
    dateRegistered: "2021-09-01",
  },
  {
    userID: 2150002,
    name: "Nguyen Van A",
    gender: "Male",
    email: "vana@gmail.com",
    phone: "0987654322",
    username: "vana",
    dateRegistered: "2021-09-02",
  },
  {
    userID: 2150003,
    name: "Tran Thi B",
    gender: "Female",
    email: "tranthib@gmail.com",
    phone: "0987654323",
    username: "tranthib",
    dateRegistered: "2021-09-03",
  },
  {
    userID: 2150004,
    name: "Le Van C",
    gender: "Male",
    email: "levanc@gmail.com",
    phone: "0987654324",
    username: "levanc",
    dateRegistered: "2021-09-04",
  },
]

export { columns, users };