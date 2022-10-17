import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  // baseURL: "http://10.0.0.158:3000/api",
});
