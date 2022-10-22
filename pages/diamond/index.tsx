import type { NextPage } from "next";
import Head from "next/head";
import Diamond from "../../components/Diamond";
import { Container } from "../../components/Diamond/styles";

const DiamondPage: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>💎 Diamond</title>
      </Head>

      <Diamond />
    </Container>
  );
};

export default DiamondPage;
