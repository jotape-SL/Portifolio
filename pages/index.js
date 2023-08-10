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
      </Head>
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </>
  );
}
