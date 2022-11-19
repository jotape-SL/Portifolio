import styled from "styled-components";
import { begeBG } from "../../styles/UI/variaveis";
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
  background-color: ${begeBG};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  padding: 10%;
  h2 {
    margin-bottom: 5rem;
    font-size: 3rem;
  }
  h2::after {
    content: "";
    background-color: currentColor;
    height: 5px;
    width: 10rem;
    display: block;
    margin: 10px auto;
    border-radius: 10px;
  }
`;
const DivContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem 0;
`;
