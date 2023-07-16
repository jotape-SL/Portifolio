import styled from "styled-components";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiSass,
} from "react-icons/si";
import { useGlobalContext } from "../Context";

export default function AboutIcons() {
  const { isPtbr } = useGlobalContext();
  const icons = [
    SiHtml5,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiBootstrap,
    SiStyledcomponents,
    SiSass,
  ];
  return (
    <>
      <h2>Skills</h2>
      <LogosDiv>
        <LogosSlideDiv>
          {icons.map((Icon, i) => {
            let names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              names = "Next.js";
            }
            return (
              <span key={i}>
                <Icon />
              </span>
            );
          })}
        </LogosSlideDiv>
      </LogosDiv>
    </>
  );
}

const LogosDiv = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 60px 0;
  white-space: nowrap;
  position: relative;
  display: flex;
  flex-direction: row;
  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }
  &::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0));
  }
  &::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0));
  }
  &:hover div {
    animation-play-state: paused;
  }
`;

const LogosSlideDiv = styled.div`
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  display: inline-block;
  animation: 2s slide infinite linear;
  img {
    height: 50px;
    margin: 0 40px;
  }
  span svg {
    font-size: 5rem;
    margin-left: 1rem;
  }
`;
