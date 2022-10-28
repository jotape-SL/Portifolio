import About from "../src/components/About";
import ContactMe from "../src/components/ContactMe";
import Footer from "../src/components/Footer";
import Home from "../src/components/Home";
import Projects from "../src/components/Projects";

export default function PageSPA() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}
