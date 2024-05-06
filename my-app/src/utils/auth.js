import jwt from 'jsonwebtoken'

export function checkAuth() {
  const cookie = document.cookie.split(';').find(cookie => cookie.startsWith('token=')).split('=')[1];
  const decoded_jwt = jwt.decode(cookie);
  if (decoded_jwt.role !== 'admin') {
    alert("You are not authorized to view this page");
    window.location.href = '/';
  }
  else if (!cookie) {
    alert("You must be signed in to view this page");
    window.location.href = '/signin';
  }
}