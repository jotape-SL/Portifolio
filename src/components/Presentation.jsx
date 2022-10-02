import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

function Model(props) {
  const { nodes, materials } = useGLTF("/compRosa.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={12}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -0.03]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.TextureGrid}
            />
          </group>
          <group position={[0, 0.5, 0.03]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.TextureGrid}
            />
          </group>
          <group position={[0.88, 0.06, 0.75]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.TextureGrid}
            />
          </group>
          <group position={[0, 0.06, 0.81]} rotation={[0.09, 0, 0]}>
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.TextureGrid}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default function ConteudoInicial() {
  return (
    <Apresentacao>
      <TextoAp>
        <Nome>João Pedro</Nome>
        <p>Desenvolvedor Front-End</p>
      </TextoAp>
      {/* <------- modelo 3d --------> */}
      <Canvas className="canvas" camera={{ position: [0, 0, 35] }}>
        <OrbitControls enableZoom={true} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </Apresentacao>
  );
}

const Apresentacao = styled.section`
  color: white;
  p {
    text-align: center;
    font-family: "Press Start 2P", cursive;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  .canvas {
    width: 500px !important;
    height: 600px !important;
  }
`;
const TextoAp = styled.div`
  margin: 5rem 0;
`;

const Nome = styled.h1`
  font-family: "Press Start 2P", cursive;
  /* font-family: "Dax", sans-serif;   */
  text-align: center;
  font-size: 5rem;
`;
