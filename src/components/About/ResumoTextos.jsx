import styled from "styled-components";
import { textos } from "./textosAbout";
import { useGlobalContext } from "../Context";

function ResumoPess() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoPess : textos.resumoPessEn;
}

function ResumoProf() {
  const { isPtbr } = useGlobalContext();
  return isPtbr ? textos.resumoProf : textos.resumoProfEn;
}

const PTextos = styled.p`
  /* font-size: 15px;
  line-height: 20px;
  margin-bottom: 2rem;
  min-height: 540px; */
`;
export { ResumoPess, ResumoProf };
