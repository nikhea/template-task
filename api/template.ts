import axios from "../lib/axios";

interface useTemplateProps {
  currentPage: number;
}
export const getTemplate = async (currentPage: number, filters: any) => {
  const { name, sort, category } = filters;
  // console.log(name, sort, category);
  const { data } = await axios.get(`?page=${currentPage}`, {
    params: filters,
  });
  //   console.log(`post ${data} fetched`);
  return data;
};
// &limit=${limitProperties}
