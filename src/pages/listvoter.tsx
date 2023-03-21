import type { NextPage } from "next";
import Head from "next/head";
import { ListVoterView } from "../views";

const ListVoter: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Basic Functionality"
        />
      </Head>
      <ListVoterView />
    </div>
  );
};

export default ListVoter;
