import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST + "/api",
  withCredentials: true,
});

api.defaults.timeout = 30000;
api.defaults.headers.post["Content-Type"] = "application/json";
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default api;
