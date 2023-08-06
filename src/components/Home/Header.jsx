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
          <DropDown>
            <button>{isPtbr ? textos.linguaPT : textos.linguaEN}</button>
            <DropDownContent className="dropdown-content">
              <a onClick={() => toggleLang(true)}>pt/br</a>
              <a onClick={() => toggleLang(false)}>en</a>
            </DropDownContent>
          </DropDown>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  justify-content: space-between;
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
    z-index: 900;
  }
`;

const IconeA = styled.a`
  font-size: 2.5rem;
  font-family: "Kenia", monospace;
  mix-blend-mode: revert;
  text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
  margin: 1rem;
`;
const NavContainer = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
`;
const NavLinks = styled.li`
  display: flex;
  padding-right: 1rem;
  align-items: center;
  a,
  button {
    font-family: "Azeret Mono", monospace;
    font-size: 12px;
    color: #f5f5f5;
    cursor: pointer;
    margin-left: 16px;
    opacity: 0.6;
    background: none;
    border: none;
    &:hover {
      opacity: 1;
    }
  }
`;
const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover div {
    display: block;
  }
`;
const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  text-align: start;
  z-index: 1;
  padding: 10px;
  a {
    font-size: 15px;
    color: black;
    text-decoration: none;
    display: block;
    margin: 0;
  }
  a:hover {
    background-color: #f5f5f5;
  }
`;
