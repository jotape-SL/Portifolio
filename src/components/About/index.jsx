import React from "react";
import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiSass,
} from "react-icons/si";
import { cinzaClaro, begeBG } from "../../styles/UI/variaveis";

export default function About() {
  const icons = [
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiBootstrap,
    SiStyledcomponents,
    SiSass,
  ];
  return (
    <AboutSection>
      <ContentDiv>
        <div>
          <img
            src="https://placekitten.com/500/500"
            alt="uma pessoa bem bonita, mas conhecida como eu "
          />
        </div>
        <div>
          <h2>Sobre mim</h2>
          <BotaoResumo>Resumido</BotaoResumo>
          <BotaoResumo>Não tão resumido</BotaoResumo>
          <BotaoResumo>Já somos intimos</BotaoResumo>
          <br />
          <br />
          <p>
            Meu nome é João Pedro, tenho 20 anos. Sou programador Front-end.
            Atualmente busco uma oportunidade para adquirir experiência na área
            da tecnologia com programação e desenvolvimento web. Adoro criar e
            dar vida para minhas ideias mais ambiciosas, os desafios fazem parte
            da minha rotina.
          </p>
        </div>
      </ContentDiv>
      <h2>Ferramentas com que trabalho</h2>
      <IconDiv>
        {icons.map((Icon, i) => {
          let names = Icon.name.slice(2);
          if (names.charAt(0) === "N") {
            names = "Next.js";
          }

          return (
            <span key={i}>
              <Icon />
              <p href="/">{names}</p>
            </span>
          );
        })}
      </IconDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  margin-top: 25px;
  height: calc(100vh + 25px);
  font-family: monospace;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.877) 5%,
    black 1%,
    ${begeBG} 70%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    padding: 5px;
    border: 2px solid ${cinzaClaro};
    width: 400px;
    height: 400px;
    border-radius: 10px;
    animation: border 3s ease-in-out;
  }
  h2 {
    font-size: 3rem;
    margin: 2rem 0;
  }
  h2:nth-child(2) {
    margin: 8rem 0rem 2rem 0;
    font-size: 2rem;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  align-items: flex-start;
  color: white;
  font-size: 1.1rem;
  margin-top: 5.5rem;
  padding: 5% 14% 0 14%;
  div:nth-child(2) {
    margin: 0 10rem;
  }
`;

const BotaoResumo = styled.button`
  padding: 6px;
  margin-right: 5px;
  font-weight: bold;
  font-family: sans-serif;
  border: none;
  border-radius: 5px;
  background-color: rgb(251, 255, 199);
  cursor: pointer;
  &:hover {
    transition: 0.1s ease-in-out;
    color: black;
    background-color: rgb(198, 201, 156);
  }
`;

const IconDiv = styled.div`
  display: flex;
  text-align: center;
  gap: 1rem;
  svg {
    font-size: 4rem;
  }
  p {
    font-size: 1rem;
    font-weight: bold;
  }
  span:hover {
    transition: 0.1s ease-in-out;
    color: rgb(90, 92, 71);
  }
`;

// animações para usar futuramente
//
// @keyframes opacityLtR {
//   from {
//     opacity: 0;
//     transform: translateX(-1000px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0px);
//   }
