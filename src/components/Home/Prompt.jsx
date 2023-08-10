import styled from "styled-components";
import { TiArrowSortedDown } from "react-icons/ti";
import { TbPrompt } from "react-icons/tb";
import {
  AiOutlineBorder,
  AiOutlineMinus,
  AiOutlineClose,
} from "react-icons/ai";
import { corFonte1st } from "../../styles/UI/variaveis";
import WelcomeText from "./WelcomeText";
import { textos } from "./textosHome";
import { useGlobalContext } from "../Context";

export default function ConteudoInicial({ scrollPosition }) {
  const { isPtbr } = useGlobalContext();
  return (
    <Apresentacao>
      <TextoAp className={scrollPosition > 1 ? "fixPrompt" : ""}>
        <div className="prompt-header">
          <div className="prompt-header__ds">
            <TbPrompt />
            <p>{isPtbr ? textos.promptPT : textos.promptEN}</p>
          </div>
          <div className="prompt-header__icons">
            <div>
              <AiOutlineMinus />
            </div>
            <div>
              <AiOutlineBorder />
            </div>
            <div>
              <AiOutlineClose />
            </div>
          </div>
        </div>
        <p>{"C:Usersporfolio>help"}</p>
        <p>{isPtbr ? textos.subtituloPT : textos.subtituloEN}</p>
        <WelcomeText />
      </TextoAp>
      <ScrollDiv>
        <p>Scroll down</p>
        <TiArrowSortedDown className="iconScroll" />
      </ScrollDiv>
    </Apresentacao>
  );
}

const Apresentacao = styled.section`
  z-index: 6;
  color: ${corFonte1st};
  position: relative;
  p {
    text-align: center;
    font-family: "Azeret Mono", monospace;
  }
  .fixPrompt {
    margin-top: 77px;
  }
  .prompt-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000;
    .prompt-header__icons div {
      padding: 5px 15px;
      &:hover {
        background-color: #353535;
      }
      &:hover:nth-child(3) {
        background-color: #ff0000;
      }
    }
    p {
      font-size: 12px;
    }
    div {
      display: flex;
    }
  }
`;
const TextoAp = styled.div`
  background-color: #101010;
  border: 1px solid #6f6f6f;
  max-width: 75vw;
  min-height: 70vh;
  margin: 0 auto;
  p {
    text-align: start;
  }
  @media (min-width: 1240px) {
    max-width: 50vw;
  }
`;

const ScrollDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  animation: scrollDown 3s ease-in-out infinite;
  p {
  }
  .iconScroll {
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
