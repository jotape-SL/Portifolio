import styled from "styled-components"
import { begeBG } from "../../styles/UI/variaveis"

export default function Projects(){
    return (
        <SectionProjetos>
            <h2>Meus projetos</h2>
            <DivContainer>
                <img src="https://placekitten.com/600/700" alt="" />
                <p>project name</p>
            </DivContainer>
        </SectionProjetos>

    )
}

const SectionProjetos = styled.section`
    height: 100vh;
    background-color: ${begeBG};
`
const DivContainer = styled.div`
    display: flex;
`