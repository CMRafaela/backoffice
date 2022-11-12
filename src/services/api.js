import axios from "axios";

const api = axios.create({
  baseURL: "https://api.180s.com.br/api/auth",
});

export default api;