import React from "react";
import styled from "styled-components";
import {SiHtml5, SiCss, SiJavascript, SiBootstrap, SiReact, SiNextdotjs, SiStyledcomponents, SiSass } from 'react-icons/si';

export default function About() {
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
        <span>html<SiHtml5/></span>
        <span>CSS<SiCss/></span>
        <span>JavaScript<SiJavascript/></span>
        <span>Boostrap<SiBootstrap/></span>
        <span>React<SiReact/></span>
        <span>Next<SiNextdotjs/></span>
        <span>Styled-Components<SiStyledcomponents/></span>
        <span>Sass<SiSass/></span>
      </ContentDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
position: relative;
height:100vh;
margin-top:25px;
font-family: monospace;
background-image:linear-gradient(rgba(0, 255, 0, 0.1), rgb(254, 255, 222));
  display: flex;
  flex-direction: row;
  align-items: center;
  padding:0 20% 0 10%;
  img {
    width: 400px;
    height: 400px;
    border-radius:10px;
    animation: border 3s ease-in-out;
  }
  h2 {
    font-size: 4rem;
    margin:2rem 0;
  }
  h2:nth-child(3){
    margin:5rem 0rem 2rem 0;
    font-size:2rem;
  }
}
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
// @keyframes neonFlicker {
//   0% {
//     filter: brightness(1);
//   }
//   3% {
//     filter: brightness(0);
//   }
//   6% {
//     filter: brightness(0);
//   }
//   7% {
//     filter: brightness(1);
//   }
//   8% {
//     filter: brightness(0);
//   }
//   9% {
//     filter: brightness(1);
//   }
//   10% {
//     filter: brightness(0);
//   }
//   /* 20% {
//     filter: brightness(0);
//   }
//   50% {
//     filter: brightness(1);
//   }
//   99% {
//     filter: brightness(0);
//   }*/
//   100% {
//     filter: brightness(0);
//   }
// }
