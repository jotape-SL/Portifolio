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
  border-radius: 1rem;
  padding: 8px 0;
  margin-left: 1rem;
  background-color: white;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  border: 1px solid white;
  box-shadow: 0 0 6px 0px white;
  :hover {
    box-shadow: 0 0 10px 0px white;
    animation: hologram 25s linear infinite;
  }
  a {
    font-family: "Code", sans-serif;
    font-weight: 900;
    padding: 1rem 2rem;
    color: black;
    background-color: transparent;
    cursor: pointer;
    :hover {
      text-shadow: 2px 2px 5px #000000, -2px -2px 5px #000000;
      color: white;
    }
  }

  @keyframes hologram {
    0% {
      /* <------- cor holograma ---------> */
      /* background-image: repeating-linear-gradient(#0000ff 1%, #00ffff 12%); */
      background-image: repeating-linear-gradient(#ffffff 10%, #000000 12%);
      background-position-y: 0px;
      box-shadow: none;
    }
    .1% {
      box-shadow: 0 0 20px 5px white;
    }
    .12% {
      box-shadow: 0 0 6px 0px white;
    }
    100% {
      background-position-y: 200px;
    }
  }
`;
