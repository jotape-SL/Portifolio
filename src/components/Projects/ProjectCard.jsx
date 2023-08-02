import projetinhos from "./projetosGitHub";
import styled from "styled-components";
import { begeBG, cinzaBG } from "../../styles/UI/variaveis";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

export default function ProjectCard() {
  return (
    <>
      {projetinhos.map((card) => {
        return (
          <DivCard key={card.id}>
            <ImgCard src={card.imagem} alt={card.nome} className="imagis" />
            <LinkCard
              href={card.link}
              rel="noreferrer noopener"
              target="_blank"
            >
              <TitleCard className="titulus">{card.nome} </TitleCard>
            </LinkCard>
          </DivCard>
        );
      })}
    </>
  );
}

const DivCard = styled.div`
  position: relative;
  border-radius: 10px;
  height: 12.5rem;
  width: 22.5rem;
  overflow: hidden;
  display: flex;
`;

const ImgCard = styled.img`
  position: absolute;
  object-fit: cover;
  border-radius: 10px;
  width: 360px;
  height: 200px;
`;
const TitleCard = styled.p`
  margin: 0 auto;
  margin-top: 1rem;
  width: fit-content;
  background-color: ${cinzaBG};
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  opacity: 0;
`;
const LinkCard = styled.a`
  border-radius: 10px;
  height: 12.5rem;
  width: 19.875rem;
  z-index: 5;
  position: absolute;
  &:hover {
    background-color: #0000005a;
    p {
      opacity: 1;
    }
  }
`;
