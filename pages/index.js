import Head from "next/head";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (true) {
      router.push("/programs/id");
    }
  }, []);

  return (
    <div className="">
      <Head>
        <title>Arrivo</title>
        <meta
          name="description"
          content="This is a beautiful travel agency website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
      </main>

      <footer className=""></footer>
    </div>
  );
}
