import React, { useState } from "react";
import styled from "styled-components";
import { cinzaClaro } from "../../styles/UI/variaveis";

export default function FotoMinha() {
  const [isClicado, setIsClicado] = useState(false);
  return (
    <ProfileDiv
      onClick={() => {
        setIsClicado(!isClicado);
      }}
    >
      <img
        className={isClicado ? "animation-foto" : ""}
        src="./perfil.png"
        alt="uma pessoa bem bonita, mas conhecida como eu!"
      />
      <SenhaDiv className={isClicado ? "animation-senha" : ""}>
        <p>1234</p>
      </SenhaDiv>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    opacity: 1;
  }
  .animation-foto {
    animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }
  @keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
      opacity: 0;
      position: absolute;
    }
  }
`;

const SenhaDiv = styled.div`
  background-color: black;
  width: 378px;
  height: 371px;
  color: white;
  display: flex;
  align-items: center;
  position: absolute;
  opacity: 0;
  p {
    text-align: center;
  }
  .animation-senha {
    animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
  }
  @keyframes flip-horizontal-top {
    0% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      opacity: 1;
      position: relative;
    }
  }
`;
