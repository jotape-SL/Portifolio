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
          <a href="#contato">{isPtbr ? textos.contatoPT : textos.contatoEN}</a>
        </NavLinks>
        <LangDiv>
          <a onClick={() => toggleLang(true)}>
            <svg></svg>
          </a>
          <a onClick={() => toggleLang(false)}>
            <svg></svg>
          </a>
        </LangDiv>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 375px) {
    justify-content: flex-end;
  }
  &.rel {
    position: relative;
    background-color: transparent;
  }
  &.fix {
    /* background-color: #ffebcd99; */
    border-bottom: 1px solid white;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
  }
`;

const IconeA = styled.a`
  font-size: 4rem;
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
  border-radius: 5px;
  padding: 10px 0;
  margin-left: 1rem;
  background-color: ${corFonte1st};
  box-shadow: 0 0 10px 0px ${verdeMatrix};
  :hover {
    box-shadow: 0 0 10px 0px ${corFonte1st};
  }
  a {
    font-family: "Press Start 2P", monospace;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    color: black;
    background-color: transparent;
    cursor: pointer;
    @media (max-width: 375px) {
      padding: 1.5rem;
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
