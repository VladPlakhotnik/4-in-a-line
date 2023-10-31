export const getWinnersScore = () => {
  const storedData = localStorage.getItem("winnersScore");

  if (storedData !== null) {
    return JSON.parse(storedData);
  }

  return { player1: 0, player2: 0, cpu: 0 };
};

export const addWinnerScore = (winner: string) => {
  const winnersScore = getWinnersScore();
  if (winner === "Red player") winnersScore["player1"] += 1;
  if (winner === "Yellow player") winnersScore["player2"] += 1;
  if (winner === "CPU") winnersScore["cpu"] += 1;
  localStorage.setItem("winnersScore", JSON.stringify(winnersScore));
};

export const resetWinnersScore = () => {
  const resetWinnersScore = { player1: 0, player2: 0, cpu: 0 };
  localStorage.setItem("winnersScore", JSON.stringify(resetWinnersScore));
};
