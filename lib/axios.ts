import axios from "axios";
// import p from "../pages/api/templates"
let main = "https://template-task-nikhea.vercel.app/api/templates";
let test = "http://localhost:3000/api/templates";
const instance = axios.create({
  baseURL: test,
  // http://localhost:3000/api/templates
});

export default instance;
