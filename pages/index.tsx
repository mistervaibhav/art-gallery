import type { NextPage } from "next";
import Head from "next/head";
import List from "../components/Galleries/List";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Art Galley</title>
      </Head>
      {/* <Gallery /> */}
      <List />
    </div>
  );
};

export default Home;
