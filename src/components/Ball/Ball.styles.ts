import styled, { css, keyframes } from "styled-components";

type ImgProps = {
  isFinished?: boolean;
};

const Bounce = keyframes`
  0%, 90%, to {
    transform: translateY(0);
  }
  0% {
    transform: translateY(-300px);
  }
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-50px);
  }
  90% {
    transform: translateY(-25px);
  }
`;

const WinAnimation = keyframes`
0% {
  transform: scale(1);
  opacity: 1;
}
50% {
  transform: scale(1.2);
  opacity: 0.5;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;

export const Img = styled.img<ImgProps>`
  animation: ${(props) =>
    props.isFinished
      ? css`
          ${WinAnimation} 2s linear infinite
        `
      : css`
          ${Bounce} 1s linear
        `};
`;
