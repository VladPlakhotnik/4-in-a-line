import React from "react";

import { Board } from "../../components/Board";
import { Score } from "../../components/Score";
import { Container } from "./Game.styles";

export const GameVsPerson: React.FC = () => {
  return (
    <Container>
      <Score type="game-vs-person" />
      <Board />
    </Container>
  );
};
