import styled, { keyframes } from "styled-components";
import { TILE_DIMENSIONS } from "./constants";

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ITilesContainerProps {
  rows: number;
  columns: number;
}

const backgroundPan = keyframes`
  from {
    background-position: 0 center;
  }

  to {
    background-position: -200% center;
  }
`;

export const TilesContainer = styled.div<ITilesContainerProps>`
  width: 100%;
  height: 100%;
  gap: 0;
  /* background: linear-gradient(to right, #7b4397, #dc2430, #7b4397); */
  background-size: 200%;
  animation: ${backgroundPan} 7s linear infinite;
  display: grid;
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
`;

export const Tile = styled.span`
  box-sizing: content-box;
  cursor: pointer;
  position: relative;

  /* &::before {
    content: "";
    background: #16161d;
    position: absolute;
    inset: 0.5px;
  } */
`;
