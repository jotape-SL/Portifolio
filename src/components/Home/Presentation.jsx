import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CompRosa } from "../3dModels/CompRosa";
import { TiArrowSortedDown } from "react-icons/ti";
import { corFonte1st } from "../../styles/UI/variaveis";

export default function ConteudoInicial() {
  return (
    <Apresentacao>
      <TextoAp>
        <Nome>João Pedro</Nome>
        <p>Desenvolvedor Front-End</p>
      </TextoAp>
      {/* <------- modelo 3d --------> */}
      <Canvas className="canvas" camera={{ position: [-10, 20, 35] }}>
        <Suspense fallback={null}>
          <CompRosa />
        </Suspense>
      </Canvas>
      <ScrollDiv>
        <p>Scroll down</p>
        <TiArrowSortedDown className="iconScroll" />
      </ScrollDiv>
    </Apresentacao>
  );
}

const Apresentacao = styled.section`
  color: ${corFonte1st};
  position: relative;
  p {
    text-align: center;
    font-family: "Press Start 2P", monospace;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .canvas {
    width: 500px !important;
    height: 450px !important;
    margin: 0 auto;
    border: 1px solid white;
    border-radius: 5px;
    background-color: black;
  }
`;
const TextoAp = styled.div`
  margin: 7rem 0 4rem 0;
`;

const Nome = styled.h1`
  font-family: "Press Start 2P", monospace;
  text-align: center;
  font-size: 5rem;
  font-weight: lighter;
`;

const ScrollDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  animation: scrollDown 3s ease-in-out infinite;
  p {
  }
  .iconScroll {
    margin-top: 19px;
    margin-left: 10px;
    font-size: 2rem;
  }
  @keyframes scrollDown {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
