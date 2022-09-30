import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import WorldHolo from "./WorldHolo";
import { Suspense } from "react";

export default function ConteudoInicial() {
  return (
    <Apresentacao>
      <Nome>João Pedro</Nome>
      <p>Desenvolvedor Front-End</p>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={(-2, 5, 2)} intensity={1} />
        <Suspense fallback={null}>
          <WorldHolo />
        </Suspense>
      </Canvas>
    </Apresentacao>
  );
}

const Apresentacao = styled.section`
  color: white;
  p {
    font-family: "Dax", sans-serif;
  }
`;
const Nome = styled.h1`
  font-family: "Dax", sans-serif;
  font-size: 2rem;
`;
