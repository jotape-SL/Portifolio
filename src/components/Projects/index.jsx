import styled from "styled-components";
import { begeBG, cinzaClaro } from "../../styles/UI/variaveis";
import { paddingPadrao } from "../../styles/UI/variaveis";

export default function Projects() {
  return (
    <SectionProjetos>
      <h2>Meus projetos</h2>
      <DivContainer>
        <DivCard>
          <img src="https://placekitten.com/1000/1000" alt="" />
          <a href="https://github.com/jotape-SL"></a>
        </DivCard>
      </DivContainer>
    </SectionProjetos>
  );
}

const SectionProjetos = styled.section`
  height: 100%;
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

const DivCard = styled.div`
  max-height: 460px;
  border-radius: 10px;
  a {
    width: 600px;
    height: 450px;
    border-radius: 10px;
    padding: 5rem;
    display: block;
    transform: translateY(-453px);
    &:hover {
      transition: 0.5s ease-in-out;
      background-color: #0000004c;
    }
  }
  img {
    object-fit: cover;
    border-radius: 10px;
    width: 600px;
    height: 450px;
  }
`;
