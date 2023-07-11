import styled from "styled-components";
import { corFonte1st, verdeMatrix } from "../../styles/UI/variaveis";
import { useGlobalContext } from "../Context";
import { textos } from "./textosHome";

export default function Header({ scrollPosition }) {
  const { toggleLang, isPtbr } = useGlobalContext();
  return (
    <Nav className={scrollPosition > 1 ? "fix" : "rel"}>
      <IconeA href="#home">{` JP `}</IconeA>
      <NavContainer>
        <NavLinks>
          <a href="#sobre">{isPtbr ? textos.sobrePT : textos.sobreEN}</a>
          <a href="#projetos">
            {isPtbr ? textos.projetosPT : textos.projetosEN}
          </a>
          <a href="#contato">{isPtbr ? textos.contatoPT : textos.contatoEN}</a>
          <a>{isPtbr ? textos.linguaPT : textos.linguaEN}</a>
        </NavLinks>
        {/* <LangDiv>
          <a onClick={() => toggleLang(true)}>
            <svg></svg>
          </a>
          <a onClick={() => toggleLang(false)}>
            <svg></svg>
          </a>
        </LangDiv> */}
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: flex-end;
  &.rel {
    position: relative;
    background-color: transparent;
  }
  &.fix {
    background-color: #000000f0;
    border-bottom: 1px solid white;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
  }
`;

const IconeA = styled.a`
  font-size: 2.5rem;
  font-family: "Kenia", monospace;
  mix-blend-mode: revert;
  text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
  padding: 1rem;
`;
const NavContainer = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const NavLinks = styled.li`
  margin-right: 2rem;
  a {
    font-family: "Azeret Mono", monospace;
    font-size: 12px;
    color: #f5f5f5;
    cursor: pointer;
    margin-left: 16px;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
`;

const LangDiv = styled.div`
  a {
    cursor: pointer;
  }
  svg {
    margin-left: 1rem;
    background-repeat: no-repeat;
    background-size: cover;
    width: 45px;
    height: 30px;
  }
  a:nth-child(1) {
    svg {
      background-image: url("./images/brazilian-flag.png");
    }
  }
  a:nth-child(2) {
    svg {
      background-image: url("./images/american-flag.png");
    }
  }
`;
