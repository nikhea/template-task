import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/templates",
  // http://localhost:3000/api/templates
});

export default instance;
