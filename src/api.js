import axios from "axios";

const API = axios.create({
  baseURL: "https://construction-back.onrender.com/api",
  withCredentials: true,
});

export default API;
