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
        className={isClicado ? "animation-on" : "animation-off"}
        src="./perfil.png"
        alt="uma pessoa bem bonita, mas conhecida como eu!"
      />
      <SenhaDiv>
        <p className={isClicado ? "animation-off" : "animation-on"} id="texte2">
          1234
        </p>
      </SenhaDiv>
    </ProfileDiv>
  );
}

const ProfileDiv = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    overflow: hidden;
    max-width: 100%;
  }
  .animation-on {
    animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
      both;
    position: relative;
    opacity: 1;
    transition: 0.5s;
  }
  .animation-off {
    animation: flip-horizontal-bottom 0.4s
      cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    position: absolute;
    opacity: 0;
    transition: 0.5s;
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
  p {
    position: absolute;
    opacity: 0;
    text-align: center;
    background-color: black;
    width: 314px;
    height: 308px;
    color: white;
  }
`;
