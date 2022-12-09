import styled from "styled-components";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { corFonte1st, verdeMatrix } from "../../styles/UI/variaveis";
import { useEffect, useState } from "react";

export default function Header({ scrollPosition }) {
  return (
    <Nav className={scrollPosition > 1 ? "fix" : "rel"}>
      <a href="#home">{` JP `}</a>
      <NavContainer>
        <NavLinks>
          <a href="#contato">Contato</a>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-size: 4rem;
    font-family: "Kenia", monospace;
    /* color: inherit; */
    mix-blend-mode: revert;
    text-shadow: 1px 1px 2px black, 0 0 1em white, 0 0 0.2em white;
    padding: 1rem;
  }
  &.rel {
    position: relative;
    background-color: transparent;
  }
  &.fix {
    background-color: #00000096;
    border-bottom: 1px solid white;
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
  }
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
