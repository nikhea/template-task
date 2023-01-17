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
  const [currentPage, setCurrentPage] = useState(1);
  // const { data, isLoading } = useTemplate(parseInt(currentPage));
  // console.log(data.totalPages);

  // let currentPageNumber =
  // if (!data) return null;
  // const templateList = data.data?.map((template: any, index: number) => (
  //   <div key={index}>
  //     <TemplateItem template={template} />
  //   </div>
  // ));
  // const handleNext = () => {
  //   if (data.currentPage < data.totalPages) {
  //     setCurrentPage(data.currentPage + 1);
  //   }
  // };
  // const handlePrevious = () => {
  //   if (data.currentPage > 1) {
  //     setCurrentPage(data.currentPage - 1);
  //   }
  // };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <div className="container">
          <Header />
          {/* <div className="gridItem ">
            {isLoading ? "loading" : templateList}
          </div> */}
          {/* <Pagination
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            totalpages={data.totalPages}
            currentpage={data.currentPage}
          /> */}
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
