import Image from "next/image";
import styled from "styled-components";
import blueBall from "../../public/blueBall.svg";

export default function Header() {
  return (
    <Nav>
      <img src="https://placekitten.com/151/100" alt="*" />
      <NavContainer>
        <NavLinks>
          <a>Sobre</a>
        </NavLinks>
        <NavLinks>
          <a>Projetos</a>
        </NavLinks>
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
  display: flex;
  flex-direction: row;
`;
const NavLinks = styled.li`
  border-radius: 1rem;
  padding: 10px;
  margin-left: 1rem;
  background-color: white;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
  border: 1px solid white;
  box-shadow: 0 0 6px 0px white;
  :hover {
    box-shadow: 0 0 10px 0px white;
    animation: hologram 30s linear infinite;
  }
  a {
    padding: 1rem 2rem;
    color: black;
    background-color: transparent;
    cursor: pointer;
  }

  @keyframes hologram {
    0% {
      background-image: repeating-linear-gradient(#0000ff 1%, #00ffff 12%);
      background-position-y: 0px;
      box-shadow: none;
    }
    .1% {
      box-shadow: 0 0 20px 5px white;
    }
    .12% {
      box-shadow: 0 0 6px 0px white;
    }
    /* 2% {
    } */
    100% {
      background-position-y: 200px;
    }
  }
`;
