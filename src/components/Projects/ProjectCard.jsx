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
  max-height: 500px;
  border-radius: 10px;
  &:hover a {
    opacity: 1;
  }
  a {
    width: 650px;
    height: 450px;
    border-radius: 10px;
    padding: 5rem;
    display: block;
    opacity: 0;
    transform: translateY(-453px);
    background-color: #0000007d;
    &:hover {
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
    object-fit: cover;
    border-radius: 10px;
    width: 650px;
    height: 450px;
  }
`;
