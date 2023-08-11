import React, { useState } from "react";
import styled from "styled-components";
import { cinzaClaro } from "../../styles/UI/variaveis";
import { textos } from "./textosAbout";
import { useGlobalContext } from "../Context";

export default function Fotomaxha() {
  const { isPtbr } = useGlobalContext();
  const [isClicado, setIsClicado] = useState(false);
  let contador = 0;
  return (
    <ProfileDiv
      onClick={() => {
        contador++;
        contador > 5 ? setIsClicado(!isClicado) & console.log(contador) : "";
      }}
    >
      <img
        className={!isClicado ? "animation-on" : "animation-off"}
        src="./perfil.png"
        alt={isPtbr ? textos.imgAlt : textos.imgAltEN}
        title={isPtbr ? textos.imgAlt : textos.imgAltEN}
      />
      <SenhaDiv
        className={!isClicado ? "animation-off" : "animation-on"}
        title={isPtbr ? textos.senhaTitle : textos.senhaTitleEN}
      >
        <p>1234</p>
      </SenhaDiv>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  --imgwd-ht_mb: 80vw;
  --imgwd-ht_pc: 40vw;
  --imgwd-ht_pcb: 25vw;
  cursor: crosshair;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    width: var(--imgwd-ht_mb);
    height: var(--imgwd-ht_mb);
    overflow: hidden;
  }
  @media (min-width: 900px) {
    img {
      width: var(--imgwd-ht_pc);
      height: var(--imgwd-ht_pc);
    }
  }
  @media (min-width: 1440px) {
    img {
      width: var(--imgwd-ht_pcb);
      height: var(--imgwd-ht_pcb);
    }
  }
  .animation-on {
    animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
    position: relative;
    opacity: 1;
    transition: 0.5s;
    z-index: 2;
  }
  .animation-off {
    animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    position: absolute;
    opacity: 0;
    transition: 0.5s;
    z-index: 1;
  }

  @keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
  }
  @keyframes flip-horizontal-top {
    0% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
    }
  }
`;

const SenhaDiv = styled.div`
  --imgwd-ht_mb: 80vw;
  --imgwd-ht_pc: 40vw;
  --imgwd-ht_pcb: 25vw;
  user-select: none;
  width: var(--imgwd-ht_mb);
  height: var(--imgwd-ht_mb);
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: var(--imgwd-ht_pc);
    height: var(--imgwd-ht_pc);
  }
  @media (min-width: 1440px) {
    width: var(--imgwd-ht_pcb);
    height: var(--imgwd-ht_pcb);
  }
`;
