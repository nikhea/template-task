import type { NextPage } from "next";
import { getTemplate } from "../api/template";
import { useTemplate } from "../hooks/useTemplate";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import TemplateItem from "../components/templateItem";

const Home: NextPage = () => {
  const { data, isLoading } = useTemplate();

  const templateList = data.data.map((template: any, index: number) => (
    <div key={index}>
      <TemplateItem template={template} />
    </div>
  ));
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
        </div>{" "}
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  const data = await queryClient.fetchQuery(["template"], () => getTemplate());
  return {
    props: {
      data,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
