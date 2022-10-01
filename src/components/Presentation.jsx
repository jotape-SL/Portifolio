import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
// import CompRosa from "./CompRosa";

export default function ConteudoInicial() {
  return (
    <Apresentacao>
      <Nome>João Pedro</Nome>
      <p>Desenvolvedor Front-End</p>

      {/* <------- futuro modelo 3d --------> */}
      {/* <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={(-2, 5, 2)} intensity={1} />
        <Suspense fallback={null}>
          <CompRosa />
        </Suspense>
      </Canvas> */}
    </Apresentacao>
  );
}

const Apresentacao = styled.section`
  color: white;
  p {
    text-align: center;
    font-family: "Dax", sans-serif;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;
const Nome = styled.h1`
  margin-top: 5rem;
  font-family: "Dax", sans-serif;
  text-align: center;
  font-size: 5rem;
`;
