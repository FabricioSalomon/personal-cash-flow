import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  // baseURL: "http://192.168.1.13:3000/api",
});
