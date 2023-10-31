import React, { useEffect, useState, useContext } from "react";
import { Box, Container } from "./Score.styles";
import { getWinnersScore } from "../../utils/helpers/localStorage";
import { FinishGameContext } from "../../context/finishGame/FinishGameContext";

interface ScoreProps {
  type: string;
}
type WinnersScoreType = {
  player1: number;
  player2: number;
  cpu: number;
};

export const Score: React.FC<ScoreProps> = ({ type }) => {
  const { isFinished } = useContext(FinishGameContext);
  const [winnersScore, setWinnersScore] = useState<WinnersScoreType>(
    getWinnersScore()
  );

  useEffect(() => {
    setWinnersScore(getWinnersScore());
  }, [isFinished]);

  return (
    <Box>
      <Container>
        <div>Player 1</div>
        <div>Score: {winnersScore.player1}</div>
      </Container>
      {type === "game-vs-person" ? (
        <Container>
          <div>Player 2</div>
          <div>Score: {winnersScore.player2}</div>
        </Container>
      ) : (
        <Container>
          <div>CPU</div>
          <div>Score: {winnersScore.cpu}</div>
        </Container>
      )}
    </Box>
  );
};
