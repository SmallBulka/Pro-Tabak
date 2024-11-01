import axios from "axios";

const instance = axios.create({
  baseURL: "http://xn----8sbad0ctgiu.xn--p1ai/api",
});
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});
export const baseURL = "http://xn----8sbad0ctgiu.xn--p1ai/api";
export default instance;
