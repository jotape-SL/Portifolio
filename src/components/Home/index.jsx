import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import NoiseVideo from "./NoiseVideo";
import Prompt from "./Prompt";
import dynamic from "next/dynamic";
import { verdeBG } from "../../styles/UI/variaveis";

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
  const [isVideo, setIsVideo] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideo(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div>
        {isVideo ? (
          <NoiseVideo src={"/video/textureNoise.mp4"} type={"video/mp4"} />
        ) : (
          ""
        )}
      </div>
      <HomeSection id="home">
        <Header scrollPosition={scrollPosition} />
        <Prompt scrollPosition={scrollPosition} />
      </HomeSection>
    </>
  );
}

const HomeSection = styled.section`
  background-color: black;
  max-height: fit-content;
  padding-bottom: 3rem;
  height: 100vh;
`;
