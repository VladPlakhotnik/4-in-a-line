import type { Dispatch, SetStateAction } from "react";
import type { BallsType, Slot } from "../../components/Board/Board.types";

interface CpuPlayProps {
  slot: Slot;
  setBalls: Dispatch<SetStateAction<BallsType[]>>;
  setSlot: Dispatch<SetStateAction<Slot>>;
  setCpuBalls: Dispatch<SetStateAction<number[]>>;
  setWaitingMove: Dispatch<SetStateAction<boolean>>;
  setTurn: Dispatch<SetStateAction<boolean>>;
}

export const cpuPlay = (props: CpuPlayProps) => {
  const { slot, setBalls, setSlot, setCpuBalls, setWaitingMove, setTurn } =
    props;

  const targetId = Math.floor(Math.random() * 7);

  if (slot[targetId] >= 0) {
    setTimeout(() => {
      setBalls((prev) => [
        ...prev,
        {
          left: 68 * Number(targetId) + 16 + 20 * (Number(targetId) - 1) + 25,
          top:
            69 * slot[Number(targetId)] + 6 + 20 * slot[Number(targetId)] + 4,
          id: slot[Number(targetId)] * 7 + Number(targetId),
          isWiningBall: false,
        },
      ]);

      setSlot({
        ...slot,
        [Number(targetId)]: slot[Number(targetId)] - 1,
      });

      setCpuBalls((prev) => [
        ...prev,
        slot[Number(targetId)] * 7 + Number(targetId),
      ]);

      setWaitingMove((prev) => !prev);
      setTurn((prev) => !prev);
    }, 1000);
  }
};
