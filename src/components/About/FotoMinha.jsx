import React, { useState } from "react";
import styled from "styled-components";
import { cinzaClaro } from "../../styles/UI/variaveis";

export default function FotoMinha() {
  const [isClicado, setIsClicado] = useState(false);
  let contador = 0;
  return (
    <ProfileDiv
      onMouseMove={() => {
        contador++;
        contador > 500 ? setIsClicado(!isClicado) & console.log(contador) : "";
      }}
    >
      <img
        className={!isClicado ? "animation-on" : "animation-off"}
        src="./perfil.png"
        alt="Um conjunto de átomos, comumente chamado de João!"
        title="Um conjunto de átomos, comumente chamado de João!"
      />
      <SenhaDiv
        className={!isClicado ? "animation-off" : "animation-on"}
        title="Senha super secreta,shhhhhh!"
      >
        <p>1234</p>
      </SenhaDiv>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  cursor: grab;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    -webkit-user-drag: none;
    -webkit-user-select: none;
    width: 80vw;
    height: 80vw;
    overflow: hidden;
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
  user-select: none;
  width: 80vw;
  height: 80vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
