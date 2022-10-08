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
import { verdeMatrix } from "../../styles/UI/variaveis";

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
      <div>
        <img
          src="https://placekitten.com/500/500"
          alt="uma pessoa bem bonita, mas conhecida como eu "
        />
      </div>
      <ContentDiv>
        <h2>Sobre mim</h2>
        <p>
          Meu nome é João Pedro, tenho 20 anos. Sou programador Front-end.
          Atualmente busco uma oportunidade para adquirir experiência na área da
          tecnologia com programação e desenvolvimento web. Adoro criar e dar
          vida para minhas ideias mais ambiciosas, os desafios fazem parte da
          minha rotina.
        </p>
        <h2>Ferramentas com que trabalho</h2>
        <IconDiv>
          {icons.map((Icon, i) => {
            const names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              const names = Icon.name.slice(2, -5);
              return (
                <span key={i}>
                  <Icon />
                  <p href="/">{names}</p>
                </span>
              );
            }
            return (
              <span key={i}>
                <Icon />
                <p href="/">{names}</p>
              </span>
            );
          })}
        </IconDiv>
      </ContentDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  height: 100vh;
  margin-top: 25px;
  font-family: monospace;
  background-image: linear-gradient(rgba(0, 255, 0, 0.1), rgb(254, 255, 222));
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20% 0 10%;
  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
    animation: border 3s ease-in-out;
  }
  h2 {
    font-size: 4rem;
    margin: 2rem 0;
  }
  h2:nth-child(3) {
    margin: 5rem 0rem 2rem 0;
    font-size: 2rem;
  }
  svg {
    font-size: 5rem;
    text-shadow: 2px 2px #ff0000;
    &:hover {
      transition: 0.1s ease-in-out;
      color: ${verdeMatrix};
    }
  }
`;

const IconDiv = styled.div`
  display: flex;
  text-align: center;
  gap: 1rem;
`;

const ContentDiv = styled.div`
  margin: 0 5rem;
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
