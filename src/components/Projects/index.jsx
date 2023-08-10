import styled from "styled-components";
import { begeBG, cinzaBG, verdeBG } from "../../styles/UI/variaveis";
import { useGlobalContext } from "../Context";
import ProjectCard from "./ProjectCard";
import FerramentasContent from "./FerramentasContent";

export default function Projects() {
  const { isPtbr } = useGlobalContext();
  return (
    <SectionProjetos id="projetos">
      <FerramentasDiv>
        <FerramentasContent />
      </FerramentasDiv>
      <ProjetosContainer>
        <h2>{isPtbr ? "Meus projetos" : "My Projects"}</h2>
        <DivContainer>
          <ProjectCard />
        </DivContainer>
      </ProjetosContainer>
    </SectionProjetos>
  );
}

const SectionProjetos = styled.section`
  padding-top: 5rem;
  color: white;
  overflow: hidden !important;
  background-color: ${cinzaBG};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div > h2 {
    margin-top: 10rem;
    margin-bottom: 3rem;
    font-size: 3rem;
  }
  h2 {
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-size: 3rem;
  }
`;
const FerramentasDiv = styled.div`
  position: relative;
`;
const DivContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 2rem;
  gap: 1.5rem 0;
`;
const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
