import type { NextPage } from "next";
import Head from "next/head";
import Diamond from "../../components/Diamond";
import { PageWrapper } from "../../components/Diamond/styles";

const DiamondPage: NextPage = () => {
  return (
    <PageWrapper>
      <Head>
        <title>💎 Diamond</title>
      </Head>

      <Diamond />
    </PageWrapper>
  );
};

export default DiamondPage;
