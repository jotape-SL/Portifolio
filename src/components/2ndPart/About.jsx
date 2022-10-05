import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <AboutSection>
      <div>
        <img src="" alt="uma pessoa bem bonita, mas conhecida como eu " />
      </div>
      <h2>Sobre mim</h2>
      <p>
        Meu nome é João Pedro, tenho 20 anos. Sou programador Front-end.
        Atualmente busco uma oportunidade para adquirir experiência na área da
        tecnologia com programação e desenvolvimento web. Adoro criar e dar vida
        para minhas ideias mais ambiciosas, os desafios fazem parte da minha
        rotina.
      </p>
    </AboutSection>
  );
}

const AboutSection = styled.section`
  position: relative;
  margin-top: 26px;
  h2 {
    font-size: 1rem;
  }
`;
