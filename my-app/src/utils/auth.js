import jwt from 'jsonwebtoken'

export function checkAuth() {
  // Check if there is no cookie with the name 'token'
  if (!document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
    alert("You need to sign in to view this page");
    window.location.href = '/signin';
    return;
  }
  const cookie = document.cookie.split(';').find(cookie => cookie.startsWith('token=')).split('=')[1];
  const decoded_jwt = jwt.decode(cookie);
  if (decoded_jwt.role !== 'admin') {
    alert("You are not authorized to view this page");
    window.location.href = '/';
    return;
  }
}

export function checkAuthUser() {
  // Check if there is no cookie with the name 'token'
  if (!document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
    alert("You need to sign in to view this page");
    window.location.href = '/signin';
    return;
  }
}