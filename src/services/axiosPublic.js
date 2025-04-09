import axios from "axios";

const axiosPublic = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosPublic;
