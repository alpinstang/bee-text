import { useState, useEffect } from "react";
import BeeMovie from "../components/bee-movie";
import Head from "next/head";
import text from "../components/data";

const Home = ({ start, startScript, chars, setChars }) => {
  [start, startScript] = useState(false);
  [chars, setChars] = useState("");

  return (
    <div className="content-center max-w-md h-screen overflow-hidden">
      <Head>
        <title>🐝 Bee Movie 🐝 </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BeeMovie start={start} script={chars} />
    </div>
  );
};

export default Home;
