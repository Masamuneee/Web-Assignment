import jwt from 'jsonwebtoken'
import { parseCookies } from "nookies";

export function checkAuth() {
  // Check if there is no cookie with the name 'token'
  if (!parseCookies().token && typeof window !== 'undefined') {
    alert("You need to sign in to view this page");
    window.location.href = '/signin';
    return;
  }
  const cookie = parseCookies().token;
  const decoded_jwt = jwt.decode(cookie);
  if (decoded_jwt && decoded_jwt.role !== 'admin' && typeof window !== 'undefined') {
    alert("You are not authorized to view this page");
    window.location.href = '/';
    return;
  }
}

export function checkAuthUser() {
  // Check if there is no cookie with the name 'token'
  if (!parseCookies().token && typeof window !== 'undefined') {
    alert("You need to sign in to view this page");
    window.location.href = '/signin';
    return;
  }
}