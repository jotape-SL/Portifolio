import styled from "styled-components";

function ResumoM() {
  return <PTextos> Meu nome é João Pedro.</PTextos>;
}

function ResumoP() {
  return (
    <PTextos>
      Meu nome é João Pedro, tenho 20 anos. Sou programador Front-end.
      Atualmente busco uma oportunidade para adquirir experiência na área da
      tecnologia com programação e desenvolvimento web. Adoro criar e dar vida
      para minhas ideias mais ambiciosas, os desafios fazem parte da minha
      rotina.
    </PTextos>
  );
}

function ResumoI() {
  return (
    <PTextos>
      Meu nome é João Pedro, tenho 20 anos. Sou programador Front-end.
      Atualmente busco uma oportunidade para adquirir experiência na área da
      tecnologia com programação e desenvolvimento web. Adoro criar e dar vida
      para minhas ideias mais ambiciosas, os desafios fazem parte da minha
      rotina.
      <br />
      <br />
      Trabalho bem em equipe, ajudando sempre da melhor maneira possível.
      <br />
      <br />
      No meu tempo livre adoro jogar um videogame, ver uns filminhos, ler
      quadrinhos ou algum livro, principalmente de ficção científica.
    </PTextos>
  );
}

const PTextos = styled.p`
  font-size: 1.5rem;
  line-height: 20px;
  min-height: 540px;
`;
export { ResumoM, ResumoP, ResumoI };
