import styled from "styled-components";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";

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
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
const NavLinks = styled.li`
  border-radius: 1px;
  padding: 10px 0;
  margin-left: 1rem;
  background-color: white;
  font-weight: bold;
  /* box-shadow: 0 0 5px 0px #0f0; */
  :hover {
    box-shadow: 0 0 10px 0px #0f0;
  }
  a {
    font-family: "Press Start 2P", sans-serif;
    font-weight: 900;
    padding: 1rem 2rem;
    color: black;
    background-color: transparent;
    cursor: pointer;
  }
`;
