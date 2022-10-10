import styled from "styled-components";
import { begeBG, cinzaClaro } from "../../styles/UI/variaveis";
import { paddingPadrao } from "../../styles/UI/variaveis";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <SectionProjetos>
      <h2>Meus projetos</h2>
      <DivContainer>
        <ProjectCard />
      </DivContainer>
    </SectionProjetos>
  );
}

const SectionProjetos = styled.section`
  min-height: 100vw;
  background-color: ${begeBG};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${paddingPadrao};
  h2 {
    margin-bottom: 5rem;
    font-size: 3rem;
  }
`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem 0;
`;
