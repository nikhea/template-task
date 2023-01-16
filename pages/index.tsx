import type { NextPage } from "next";
import { getTemplate } from "../api/template";
import { useTemplate } from "../hooks/useTemplate";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import TemplateItem from "../components/templateItem";
import Pagination from "../components/pagination";
import { useState } from "react";
const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useTemplate(currentPage);

  // let currentPageNumber =
  if (!data) return null;
  const templateList = data.data?.map((template: any, index: number) => (
    <div key={index}>
      <TemplateItem template={template} />
    </div>
  ));
  const handleNext = () => {
    if (parseInt(data.currentPage) < data.totalPages) {
      setCurrentPage(parseInt(data.currentPage) + 1);
    }
  };
  const handlePrevious = () => {
    if (parseInt(data.currentPage) > 1) {
      setCurrentPage(parseInt(data.currentPage) - 1);
    }
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <div className="gridItem ">
            {isLoading ? "loading" : templateList}
          </div>
          <Pagination
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            totalpages={data.totalPages}
            currentpage={parseInt(data.currentPage)}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  queryClient.clear();
  // const data = await queryClient.fetchQuery(["template"], () => getTemplate());
  return {
    props: {
      // data,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
