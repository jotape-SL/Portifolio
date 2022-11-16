import projetinhos from "./projetosGitHub";
import styled from "styled-components";
import { begeBG } from "../../styles/UI/variaveis";

export default function ProjectCard() {
  return (
    <>
      {projetinhos.map((card) => {
        return (
          <DivCard key={card.id}>
            <img src={card.imagem} alt={card.nome} />
            <a href={card.link} rel="noreferrer noopener" target="_blank">
              <p>{card.nome}</p>
            </a>
          </DivCard>
        );
      })}
    </>
  );
}

const DivCard = styled.div`
  max-height: 450px;
  border-radius: 10px;

  a {
    @media (max-width: 650px) {
      width: 100%;
    }
    max-height: 450px;
    border-radius: 10px;
    display: block;
    transform: translateY(-453px);
    overflow: hidden;
    &:hover {
      background-color: #0000007d;
      transition: 0.5s ease-in-out;
    }
    p {
      margin: 50% auto;
      width: fit-content;
      padding: 1rem;
      border-radius: 10px;
      color: black;
      font-size: 2rem;
      background-color: ${begeBG};
    }
  }
  img {
    @media (max-width: 650px) {
      width: 100%;
      height: 400px;
    }
    object-fit: cover;
    border-radius: 10px;
    width: 650px;
    height: 450px;
  }
`;
