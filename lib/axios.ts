import axios from "axios";

let main = "https://template-task-nikhea.vercel.app/api/templates";
let test = "http://localhost:3000/api/templates";
const instance = axios.create({
  baseURL: main,
  // http://localhost:3000/api/templates
});

export default instance;
