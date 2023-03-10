import type { NextPage } from "next";
import { useState } from "react";
import { getTemplate } from "../api/template";
import { useTemplate } from "../hooks/useTemplate";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import Header from "../components/header";
import TemplateItem from "../components/templateItem";
import Pagination from "../components/pagination";
const Home: NextPage = () => {
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  // const { status, data, error, isFetching, isLoading, fetchStatus } =
  //   useTemplate(currentPage, filters);
  const response = useTemplate(currentPage, filters);
  const { data, isLoading } = response;
  if (!data) return null;
  console.log(isLoading);

  const templateList = data.data?.map((template: any, index: number) => (
    <div key={index}>
      <TemplateItem template={template} />
    </div>
  ));
  const handleNext = () => {
    if (data.currentPage < data.totalPages) {
      setCurrentPage(data.currentPage + 1);
    }
  };
  const handlePrevious = () => {
    if (data.currentPage > 1) {
      setCurrentPage(data.currentPage - 1);
    }
  };

  if (response.isLoading) {
    return <div>Loading...</div>;
  }

  // if (status !== "success") {
  //   return <div>Error</div>;
  // }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <Header onFilterChange={setFilters} />
          <div className="gridItem ">{templateList}</div>

          <Pagination
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            totalpages={data.totalPages}
            currentpage={data.currentPage}
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
