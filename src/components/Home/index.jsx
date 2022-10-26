import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
// import MatrixBackground from "./MatrixBackground";
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
    <HomeSection>
      {/* <MatrixBackground /> */}
      <Header scrollPosition={scrollPosition} />
      <ConteudoInicial scrollPosition={scrollPosition} />
    </HomeSection>
  );
}

const HomeSection = styled.section`
  background-color: black;
  &::after {
    position: absolute;
    height: 20%;
    width: 100%;
    left: 0;
    content: "";
    background: black;
    transform: skewY(356deg);
    display: block;
  }
`;
