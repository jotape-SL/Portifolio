import { useEffect, useState } from "react";
import Header from "./Header";
import MatrixBackground from "./MatrixBackground";
import ConteudoInicial from "./Presentation";

export default function Home() {
  // <-------- funcao para pegar o valor do Scroll -------->
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MatrixBackground />
      <Header scrollPosition={scrollPosition} />
      <ConteudoInicial scrollPosition={scrollPosition} />
    </>
  );
}
