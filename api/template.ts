import axios from "../lib/axios";

interface useTemplateProps {
  currentPage: number;
}
export const getTemplate = async (currentPage: number) => {
  console.log(typeof currentPage);

  const { data } = await axios.get(`?page=${currentPage}`);
  //   console.log(`post ${data} fetched`);
  return data;
};
