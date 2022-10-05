import Header from "../src/components/1stPart/Header";
import MatrixBackground from "../src/components/1stPart/MatrixBackground";
import ConteudoInicial from "../src/components/1stPart/Presentation";
import About from "../src/components/2ndPart/About";

export default function Home() {
  return (
    <>
      <MatrixBackground />
      <Header />
      <ConteudoInicial />
      <About />
    </>
  );
}
