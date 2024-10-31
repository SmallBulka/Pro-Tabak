import axios from "axios";
const instance = axios.create({
  baseURL: "http://147.45.147.116:8000",
});
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});
export const baseURL = "http://147.45.147.116:8000";
export default instance;
