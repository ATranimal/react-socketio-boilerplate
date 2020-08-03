import React from "react";

import { GameState } from "./models/GameState";

interface GamePageProps {
  gameState: GameState;
}

export const GamePage = (props: GamePageProps) => {
  const { gameState } = props;

  return (
    <div className="game">
      <p>{gameState.numberOfPlayers}</p>
    </div>
  );
};
