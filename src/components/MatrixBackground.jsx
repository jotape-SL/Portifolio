import { Cloud, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export default function MatrixBackground() {
  const refMatrix = useRef(null);
  console.log(`antes: ${refMatrix.current}`);

  useEffect(() => {
    console.log(`depois: ${refMatrix.current}`);
    const context = refMatrix.current.getContext("2d");
    const canvas = refMatrix.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(window.innerWidth);

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    const alphabet = katakana + latin + nums;

    const fontSize = 15;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#0F0";
      context.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    setInterval(draw, 40);
  }, [refMatrix]);

  return (
    <MatrixDiv>
      <canvas ref={refMatrix} />
      <Canvas className="canvis">
        {/* <Stars
          radius={25}
          depth={25}
          count={5000}
          factor={4}
          fade
          speed={2.5}
        /> */}
        {/* <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={1}
        /> */}
        <Cloud
          opacity={0.1}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
        />
      </Canvas>
    </MatrixDiv>
  );
}

const MatrixDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100vw;
  overflow: hidden;
`;
