export interface BallsType {
  left: number;
  top: number;
  id: number;
  isWiningBall: boolean;
}

export interface Slot {
  [index: number]: number;
}

export interface WinnerType {
  playerName: string;
  winningCombination: number[];
}

export interface BoardProps {
  type?: string;
}
