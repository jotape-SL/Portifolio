import React, { useState } from "react";
import styled from "styled-components";

function NoiseVideo({ src, type }) {
  return (
    <BgVideo src={src} type={type} autoPlay loop playsInline muted></BgVideo>
  );
}

const BgVideo = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background-size: cover;
  overflow: hidden;
`;

export default NoiseVideo;
