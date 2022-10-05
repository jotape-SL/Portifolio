import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";
import { CompRosa } from "./3dModels/CompRosa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import Image from "next/image";

export default function ConteudoInicial() {
  return (
    <Apresentacao>
      <TextoAp>
        <Nome>João Pedro</Nome>
        <p>Desenvolvedor Front-End</p>
      </TextoAp>
      {/* <------- modelo 3d --------> */}
      <Canvas className="canvas" camera={{ position: [-10, 20, 35] }}>
        <OrbitControls enableZoom={true} />
        <Suspense fallback={null}>
          <CompRosa />
        </Suspense>
      </Canvas>
      <ScrollDiv>
        <p>Scroll down</p>
        <TiArrowSortedDown className="iconScroll" />
      </ScrollDiv>
      <Image src={CANTO.svg} />
    </Apresentacao>
  );
}

const Apresentacao = styled.section`
  color: white;
  position: relative;
  p {
    text-align: center;
    font-family: "Press Start 2P", cursive;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .canvas {
    width: 500px !important;
    height: 450px !important;
    margin: 0 auto;
  }
`;
const TextoAp = styled.div`
  margin: 7rem 0 4rem 0;
`;

const Nome = styled.h1`
  font-family: "Press Start 2P", cursive;
  text-align: center;
  font-size: 5rem;
  font-weight: lighter;
`;

const ScrollDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .iconScroll {
    margin-top: 19px;
    margin-left: 10px;
    font-size: 2rem;
  }
`;
