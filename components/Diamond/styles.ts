import styled from "styled-components";

const diamondHeight = 30;
const spanHeight = diamondHeight / 4;

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #233637;
`;

export const Diamond = styled.div`
  position: relative;
  height: ${diamondHeight}vh;
  width: ${diamondHeight}vh;
  transform: rotate(45deg);
`;

export const FirstSpan = styled.span`
  top: 0;
  left: 0;
  position: absolute;
  border-top: ${spanHeight}vh solid transparent;
  border-left: ${spanHeight}vh solid transparent;
  border-right: ${spanHeight}vh solid #20bc7d;
  border-bottom: ${spanHeight}vh solid #26c893;
`;

export const SecondSpan = styled.span`
  top: 0;
  right: 0;
  position: absolute;
  border-top: ${spanHeight}vh solid #1fb67c;
  border-right: ${spanHeight}vh solid #20bc7d;
  border-bottom: ${spanHeight}vh solid #26c893;
  border-left: ${spanHeight}vh solid #55ddb9;
`;

export const ThirdSPan = styled.span`
  bottom: 0;
  left: 0;
  position: absolute;
  border-top: ${spanHeight}vh solid #1fb67c;
  border-right: ${spanHeight}vh solid #20bc7d;
  border-bottom: ${spanHeight}vh solid #26c893;
  border-left: ${spanHeight}vh solid #55ddb9;
`;

export const ForthSpan = styled.span`
  bottom: 0;
  right: 0;
  position: absolute;
  border-top: ${spanHeight}vh solid #1fb67c;
  border-right: ${spanHeight}vh solid #20bc7d;
  border-bottom: ${spanHeight}vh solid #26c893;
  border-left: ${spanHeight}vh solid #55ddb9;
`;
