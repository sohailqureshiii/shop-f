import axios from "axios";
import { api } from "../urlConfig";

const axiosIntance = axios.create({
  baseURL: api,
});

axiosIntance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete axiosIntance.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default axiosIntance;
