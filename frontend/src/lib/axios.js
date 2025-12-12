// frontend/src/api.js (or wherever your axios instance is)
import axios from "axios";

const API_HOST = import.meta.env.VITE_API_URL || "http://localhost:5000";
// Ensure baseURL points to the API root
const BASE_URL = API_HOST.replace(/\/$/, "") + "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
