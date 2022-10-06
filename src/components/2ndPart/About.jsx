import React from "react";
import styled from "styled-components";

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
      </ContentDiv>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  height:100vh;
  marign-top:26px;
  font-family: monospace;
  background-image:linear-gradient(rgba(0,0,0,0.9) 1%, rgb(254, 255, 222));
  display: flex;
  flex-direction: row;
  align-items: center;
  padding:0 20%;
  img {
    width: 400px;
    height: 400px;
    border-radius:10px;
    animation: border 3s ease-in-out;
  }
  h2 {
    font-size: 5rem;
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
