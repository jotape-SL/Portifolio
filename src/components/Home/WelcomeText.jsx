import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Typed from "typed.js";
import { useGlobalContext } from "../Context";
import { textos } from "./textosHome";

export default function WelcomeText() {
  const { isPtbr } = useGlobalContext();
  const refAuto = useRef(null);
  useEffect(() => {
    const typed = new Typed(refAuto.current, {
      strings: [isPtbr ? textos.greetingPT : textos.greetingEN],
      typeSpeed: 0,
      startDelay: 1500,
      loop: false,
      cursorChar: "&#x2582",
    });
    return () => {
      typed.destroy();
    };
  }, [isPtbr]);
  return (
    <WelcomeP>
      <span ref={refAuto}></span>
    </WelcomeP>
  );
}

const WelcomeP = styled.p`
  font-family: "Azeret Mono", monospace !important;
  color: white;
  white-space: pre-wrap;
`;
