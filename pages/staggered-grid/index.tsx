import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { PageWrapper } from "../../components/StaggeredGrid/styles";

const StaggeredGrid = dynamic(() => import("../../components/StaggeredGrid"), {
  ssr: false,
});

const StaggeredGridPage: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>Staggered Grid</title>
      </Head>
      <StaggeredGrid />
    </PageWrapper>
  );
};

export default StaggeredGridPage;
