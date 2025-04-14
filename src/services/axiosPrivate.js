import axios from "axios";
const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});
axiosPrivate.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_ACCESS_TOKEN));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosPrivate;
