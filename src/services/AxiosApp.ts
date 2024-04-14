import axios, { AxiosInstance } from "axios";

const AxiosApp: AxiosInstance = axios.create({
  baseURL: "http://45.139.10.149:1001/api",
});

export { AxiosApp };
