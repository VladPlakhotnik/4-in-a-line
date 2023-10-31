import React, { useState } from "react";
import RedBall from "../../assets/img/red-ball.svg";
import YellowBall from "../../assets/img/yellow-ball.svg";
import { Img } from "./Ball.styles";

type BallProps = {
  turn?: boolean;
  isFinished?: boolean;
};

export const Ball: React.FC<BallProps> = (props) => {
  const { turn, isFinished } = props;

  const [color] = useState(turn);

  return !color ? (
    <Img src={RedBall} alt="redBall" isFinished={isFinished ?? false} />
  ) : (
    <Img src={YellowBall} alt="yellowBall" isFinished={isFinished ?? false} />
  );
};
