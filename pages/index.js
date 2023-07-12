import About from "../src/components/About";
import ContactMe from "../src/components/ContactMe";
import Home from "../src/components/Home";
import Projects from "../src/components/Projects";
import Head from "next/head";

export default function PageSPA() {
  return (
    <>
      <Head>
        <title>Portfolio | Jotape</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kenia&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </>
  );
}
