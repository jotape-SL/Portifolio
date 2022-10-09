import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { verdeMatrix } from "../../styles/UI/variaveis";

export default function MatrixBackground() {
  const refMatrix = useRef(null);

  useEffect(() => {
    const context = refMatrix.current.getContext("2d");
    const canvas = refMatrix.current;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 50;

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
      const grd = context.createLinearGradient(0, 4500, 0, 0);
      grd.addColorStop(0, "black");
      grd.addColorStop(1, "rgba(0, 0, 0, 0.05)");

      context.fillStyle = grd;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = `${verdeMatrix}`;
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
    </MatrixDiv>
  );
}

const ovFlowHeightVar = 50;

const MatrixDiv = styled.div`
  background-color: ${verdeMatrix};
  position: absolute;
  height: 100% + ${ovFlowHeightVar}px;
  width: 100%;
  overflow: hidden;
`;
