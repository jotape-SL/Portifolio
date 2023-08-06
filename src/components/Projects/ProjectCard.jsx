import projetinhos from "./projetosGitHub";
import styled from "styled-components";
import { begeBG, cinzaBG, roxinhoIcones } from "../../styles/UI/variaveis";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

export default function ProjectCard() {
  return (
    <>
      {projetinhos.map((card) => {
        return (
          <DivCard key={card.id}>
            <ImgCard src={card.imagem} alt={card.nome} />
            <ContentCard>
              <TitleCard>{card.nome} </TitleCard>
              <LinksCard>
                <a href={card.linkGH} rel="noreferrer noopener" target="_blank">
                  <AiFillGithub />
                </a>
                <a href={card.linkDR} rel="noreferrer noopener" target="_blank">
                  <AiOutlineLink />
                </a>
              </LinksCard>
            </ContentCard>
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
  align-items: center;
  flex-direction: column;
  z-index: 1;
  &:hover {
    img {
      filter: blur(1.5px);
    }
    > div {
      background-color: #ffffff5a;
    }
    p {
      opacity: 1;
    }
    svg {
      opacity: 1;
      &:hover {
        color: ${roxinhoIcones};
      }
    }
  }
`;

const ImgCard = styled.img`
  position: absolute;
  object-fit: cover;
  border-radius: 10px;
  width: 22.5rem;
  height: 12.5rem;
  z-index: 2;
`;
const TitleCard = styled.p`
  margin: 0 auto;
  margin-top: 1rem;
  width: fit-content;
  background-color: ${roxinhoIcones};
  color: ${cinzaBG};
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  opacity: 0;
  z-index: 4;
`;
const ContentCard = styled.div`
  border-radius: 10px;
  height: 12.5rem;
  width: 22.5rem;
  z-index: 3;
  position: absolute;
`;

const LinksCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  svg {
    color: ${cinzaBG};
    opacity: 0;
    font-size: 7.5rem;
  }
`;
