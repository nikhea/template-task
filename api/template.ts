import axios from "../lib/axios";

export const getTemplate = async () => {
  const { data } = await axios.get("/");
  //   console.log(`post ${data} fetched`);
  return data;
};
