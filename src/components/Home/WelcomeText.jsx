import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typed from "typed.js";
import { verdeMatrix } from "../../styles/UI/variaveis";

export default function WelcomeText() {
  const refAuto = useRef(null);
  useEffect(() => {
    const typed = new Typed(refAuto.current, {
      strings: ["Bem vindo ao meu portfólio. :^)"],
      typeSpeed: 250,
      startDelay: 1000,
      loop: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <WelcomeP>
      <span ref={refAuto}></span>
    </WelcomeP>
  );
}

const WelcomeP = styled.p`
  font-family: "Press Start 2P", monospace !important;
  color: ${verdeMatrix};
  max-width: 500px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 7rem;
  text-align: center;
`;
