import styled from "styled-components";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { corFonte1st, verdeMatrix } from "../../styles/UI/variaveis";

export default function Header() {
  return (
    <Nav>
      <img src="https://placekitten.com/151/100" alt="*" />
      <NavContainer>
        <li>
          <BsMoonStarsFill />
        </li>
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
  position: relative;
`;
const NavContainer = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  li svg {
    color: ${corFonte1st};
    font-size: 1.3rem;
    cursor: pointer;
  }
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
