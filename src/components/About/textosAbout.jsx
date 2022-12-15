import styled from "styled-components";

const PTextos = styled.p`
  font-size: 1.5rem;
  line-height: 20px;
  margin-bottom: 2rem;
  min-height: 540px;
`;

export const textos = {
  resumoMPT: <PTextos> Meu nome é João Pedro.</PTextos>,
  resumoMEN: <PTextos> My name is João Pedro.</PTextos>,
  resumoPPT: (
    <PTextos>
      Meu nome é João Pedro, tenho 20 anos. Sou programador Front-end.
      Atualmente busco uma oportunidade para adquirir experiência na área da
      tecnologia com programação e desenvolvimento web. Adoro criar e dar vida
      para minhas ideias mais ambiciosas, os desafios fazem parte da minha
      rotina, me motivam a ser um melhor profissional.
    </PTextos>
  ),
  resumoPEN: (
    <PTextos>
      My name is João Pedro, I'm 20 years old. I'm a Front-end Developer.
      Currently seeking an opportunity to acquire experience on the technology
      field with programming and web development. Love to create and bring to
      life my most ambicious ideas, challenges are part of my routine, it drives
      me towards being a better proffessional.
    </PTextos>
  ),
  resumoIPT: (
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
  ),
  resumoIEN: (
    <PTextos>
      My name is João Pedro, I'm 20 years old. I'm a Front-end Developer.
      Currently seeking an opportunity to acquire experience on the technology
      field with programming and web development. Love to create and bring to
      life my most ambicious ideas, challenges are part of my routine, it drives
      me towards being a better proffessional.
      <br />
      <br />
      Team work makes the dream work! I always try to mantain a light work
      environment and help the best way I can.
      <br />
      <br />
      In my free time i like to play videogames, watch some movies or read
      comics.
    </PTextos>
  ),
};
