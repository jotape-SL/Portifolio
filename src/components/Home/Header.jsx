import styled from "styled-components";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { corFonte1st, verdeMatrix } from "../../styles/UI/variaveis";
import { useEffect, useState } from "react";

export default function Header({ scrollPosition }) {
  return (
    <Nav className={scrollPosition > 1 ? "fix" : "rel"}>
      <img src="https://placekitten.com/151/100" alt="*" />
      <NavContainer>
        <NavLinks>
          <a>Contato</a>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  &.rel {
    position: relative;
    background-color: transparent;
  }
  &.fix {
    background-color: #00000096;
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
  }
`;
