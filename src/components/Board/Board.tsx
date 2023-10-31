import type { BoardProps, BallsType, WinnerType, Slot } from "./Board.types";

import React, { useEffect, useState } from "react";
import WhiteBoard from "../../assets/img/white-board.svg";
import BlackBoard from "../../assets/img/black-board.svg";
import MarkerRed from "../../assets/img/marker-red.svg";
import MarkerYellow from "../../assets/img/marker-yellow.svg";

import {
  Container,
  GameButton,
  Img,
  Marker,
  Box,
  H1,
  ButtonAgain,
} from "./Board.styles";
import { Ball } from "../Ball";
// import { cpuPlay } from "../../utils/helpers/cpuPlay";
// import { checkWinner } from "../../utils/helpers/checkWinner";

export const Board: React.FC<BoardProps> = ({ type }) => {
  const [balls, setBalls] = useState<BallsType[]>([]);
  const [winner, setWinner] = useState<WinnerType>();
  const [turn, setTurn] = useState<boolean>(true);
  const [markerMove, setMarkerMove] = useState({ x: 850 });
  const [redPlayerBalls, setRedPlayerBalls] = useState<number[]>([]);
  const [yellowPlayerBalls, setYellowPlayerBalls] = useState<number[]>([]);
  // const [cpuBalls, setCpuBalls] = useState<number[]>([]);
  const [waitingMove, setWaitingMove] = useState(false);
  const [slot, setSlot] = useState<Slot>({
    0: 5,
    1: 5,
    2: 5,
    3: 5,
    4: 5,
    5: 5,
    6: 5,
  });
  const gamingButtons = Array(7).fill(0);

  // useEffect(() => {
  //   const checkedWinner = checkWinner(
  //     redPlayerBalls,
  //     yellowPlayerBalls,
  //     cpuBalls
  //   );
  //   if (!winner?.playerName) {
  //     setWinner(checkedWinner);
  //   }

  //   if (!turn && type === "game-vs-cpu" && !checkedWinner?.playerName) {
  //     cpuPlay({
  //       slot,
  //       setBalls,
  //       setSlot,
  //       setCpuBalls,
  //       setWaitingMove,
  //       setTurn,
  //     });
  //   }
  // }, [turn]);

  useEffect(() => {
    setBalls((prev) =>
      [...prev].map((turn) => {
        if (winner?.winningCombination.includes(turn.id)) {
          return { ...turn, isWiningBall: true };
        }
        return turn;
      })
    );
  }, [winner?.playerName]);

  const handlePlay = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof HTMLButtonElement) {
      const targetId = parseInt(event.target.id.split("-")[1], 10);
      setWaitingMove(!waitingMove);

      if (slot[targetId] >= 0 && !winner?.playerName) {
        if (targetId || targetId === 0) {
          setBalls([
            ...balls,
            {
              left:
                68 * Number(targetId) + 16 + 20 * (Number(targetId) - 1) + 25,
              top:
                69 * slot[Number(targetId)] +
                6 +
                20 * slot[Number(targetId)] +
                4,
              id: slot[Number(targetId)] * 7 + Number(targetId),
              isWiningBall: false,
            },
          ]);
          setSlot({
            ...slot,
            [Number(targetId)]: slot[Number(targetId)] - 1,
          });
        }
        if (turn) {
          setRedPlayerBalls([
            ...redPlayerBalls,
            slot[Number(targetId)] * 7 + Number(targetId),
          ]);
        } else {
          setYellowPlayerBalls([
            ...yellowPlayerBalls,
            slot[Number(targetId)] * 7 + Number(targetId),
          ]);
        }
        setTurn(!turn);
      }
    }
  };

  const updateDisplay = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMarkerMove({ x: e.clientX });
  };

  const resetGame = () => {
    setBalls([]);
    setTurn(true);
    setWinner({ playerName: "", winningCombination: [] });
    setSlot({
      0: 5,
      1: 5,
      2: 5,
      3: 5,
      4: 5,
      5: 5,
      6: 5,
    });
  };

  return (
    <>
      <Box onMouseMove={updateDisplay}>
        {turn ? (
          <Marker
            src={MarkerRed}
            alt="MarkerRed"
            style={{ left: `${markerMove.x}px` }}
          />
        ) : (
          <Marker
            src={MarkerYellow}
            alt="MarkerYellow"
            style={{ left: `${markerMove.x}px` }}
          />
        )}
        <Container>
          {gamingButtons.map((_, idx) => (
            <GameButton
              id={`gamingButtonId-${idx}`}
              onClick={handlePlay}
              isDisabled={type === "game-vs-cpu" ? waitingMove : false}
            />
          ))}
          <Img src={BlackBoard} alt="BlackBoard" />
          <Img src={WhiteBoard} alt="WhiteBoard" />

          {balls.map((ball) => {
            return (
              <Box
                key={`ball-${ball.id}`}
                style={{
                  position: "absolute",
                  left: `${ball.left}px`,
                  top: `${ball.top}px`,
                  zIndex: "4",
                }}
              >
                {!ball.isWiningBall ? (
                  <Ball turn={turn} />
                ) : (
                  <Ball isFinished={true} />
                )}
              </Box>
            );
          })}
        </Container>
      </Box>
      <H1>
        {winner?.playerName ? (
          <>
            <p>
              {winner?.playerName} is winner |{" "}
              <ButtonAgain onClick={resetGame}>Play again</ButtonAgain>
            </p>
          </>
        ) : (
          "4 IN A LINE"
        )}
      </H1>
    </>
  );
};
