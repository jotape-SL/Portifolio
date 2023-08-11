import projetinhos from "./projetosGitHub";
import styled from "styled-components";
import { begeBG, cinzaBG, roxinhoIcones } from "../../styles/UI/variaveis";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { useState } from "react";

export default function ProjectCard() {
  const [openOverlayId, setOpenOverlayId] = useState(null);

  const handleImageClick = (projectId) => {
    if (openOverlayId === projectId) {
      setOpenOverlayId(null);
    } else {
      setOpenOverlayId(projectId);
    }
  };

  return (
    <>
      {projetinhos.map((card) => {
        const isOverlayOpen = openOverlayId === card.id;

        return (
          <DivCard key={card.id}>
            <ImgCard
              onClick={() => handleImageClick(card.id)}
              src={card.imagem}
              alt={card.nome}
            />
            {isOverlayOpen && (
              <ContentCard onClick={() => handleImageClick(card.id)}>
                <TitleCard>{card.nome}</TitleCard>
                <LinksCard>
                  <a
                    href={card.linkGH}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href={card.linkDR}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <AiOutlineLink />
                  </a>
                </LinksCard>
              </ContentCard>
            )}
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
      cursor: pointer;
      filter: blur(1.5px);
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
  z-index: 4;
`;
const ContentCard = styled.div`
  background-color: #ffffff5a;
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
    font-size: 7.5rem;
  }
`;
