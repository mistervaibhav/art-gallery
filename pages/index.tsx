import type { NextPage } from "next";
import Head from "next/head";
import Gallery from "../components/Galleries";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Art Galley</title>
      </Head>
      <Gallery />
    </div>
  );
};

export default Home;
