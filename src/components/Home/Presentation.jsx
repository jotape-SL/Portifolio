import styled from "styled-components";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { CompRosa } from "../3dModels/CompRosa";
import { TiArrowSortedDown } from "react-icons/ti";
import { corFonte1st } from "../../styles/UI/variaveis";
import WelcomeText from "./WelcomeText";
import { textos } from "./textosHome";
import { useGlobalContext } from "../Context";

export default function ConteudoInicial({ scrollPosition }) {
  const { isPtbr } = useGlobalContext();
  return (
    <Apresentacao>
      <TextoAp className={scrollPosition > 1 ? "fix" : ""}>
        <p>{"C:Usersporfolio>help"}</p>
        <p>{isPtbr ? textos.subtituloPT : textos.subtituloEN}</p>
      </TextoAp>
      {/* <------- modelo 3d --------> */}
      <WelcomeText />
      <ScrollDiv>
        <p>Scroll down</p>
        <TiArrowSortedDown className="iconScroll" />
      </ScrollDiv>
    </Apresentacao>
  );
}

const Apresentacao = styled.section`
  color: ${corFonte1st};
  position: relative;
  p {
    text-align: center;
    font-family: "Azeret Mono", monospace;
    margin-top: 3rem;
    font-size: 1.5rem;
  }
`;
const TextoAp = styled.div``;

const ScrollDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  animation: scrollDown 3s ease-in-out infinite;
  p {
  }
  .iconScroll {
    margin-top: 19px;
    margin-left: 10px;
    font-size: 2rem;
  }
  @keyframes scrollDown {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
