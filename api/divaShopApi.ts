import axios from "axios";

const divaApi = axios.create({
  baseURL: "/api",
});

export default divaApi;
