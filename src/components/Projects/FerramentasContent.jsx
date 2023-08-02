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
  SiPython,
  SiBlender,
} from "react-icons/si";
import { useGlobalContext } from "../Context";
import { cinzaClaro, verdeBG } from "../../styles/UI/variaveis";

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
    SiPython,
    SiBlender,
  ];
  return (
    <>
      <h2>Skills</h2>
      <LogosDiv>
        <LogosSlideDiv className="slide1">
          {icons.map((Icon, i) => {
            let names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              names = "Next.js";
            }
            return (
              <>
                <LogosSpan key={i}>
                  <Icon title={names} />
                  <span className="texte">{names}</span>
                </LogosSpan>
              </>
            );
          })}
        </LogosSlideDiv>
        <LogosSlideDiv className="slide2">
          {icons.map((Icon, i) => {
            let names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              names = "Next.js";
            }
            return (
              <LogosSpan key={i}>
                <Icon title={names} />
                <span className="texte">{names}</span>
              </LogosSpan>
            );
          })}
        </LogosSlideDiv>
        <LogosSlideDiv className="slide3">
          {icons.map((Icon, i) => {
            let names = Icon.name.slice(2);
            if (names.charAt(0) === "N") {
              names = "Next.js";
            }
            return (
              <LogosSpan key={i}>
                <Icon title={names} />
                <span className="texte">{names}</span>
              </LogosSpan>
            );
          })}
        </LogosSlideDiv>
      </LogosDiv>
    </>
  );
}

const LogosDiv = styled.div`
  display: flex;
  margin-bottom: 8rem;
  &:hover div {
    animation-play-state: paused;
  }
  .slide1 {
    animation: 5s slide1 infinite linear;
  }
  .slide2 {
    overflow: hidden;
    animation: 5s slide2 infinite linear;
  }
  .slide3 {
    overflow: hidden;
    animation: 5s slide3 infinite linear;
  }
`;

const LogosSlideDiv = styled.div`
  --logosWidth: 1100px;
  width: var(--logosWidth);
  display: flex;
  position: absolute;
  margin-left: 2rem;
  left: 0;
  @keyframes slide1 {
    0% {
      left: 0%;
    }
    100% {
      left: calc(var(--logosWidth) * -1);
    }
  }
  @keyframes slide2 {
    0% {
      left: var(--logosWidth);
    }
    100% {
      left: 0%;
    }
  }
  @keyframes slide3 {
    0% {
      left: calc(var(--logosWidth) * 2);
    }
    100% {
      left: var(--logosWidth);
    }
  }
`;

const LogosSpan = styled.span`
  svg {
    color: #ba7af7;
    opacity: 0.8;
    margin: 0 1rem;
    font-size: 5rem;
  }
  span {
    opacity: 0;
  }
  &:hover svg {
    opacity: 1;
    /* color: blueviolet; */
  }
`;
