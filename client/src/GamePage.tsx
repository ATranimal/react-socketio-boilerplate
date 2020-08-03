import React from "react";

import { GameState } from "./models/GameState";
import { SocketEmitters } from "./models/SocketEmitters";

interface GamePageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
}

export const GamePage = (props: GamePageProps) => {
  const { gameState, socketEmitters } = props;

  return (
    <div className="game">
      <div className="player-counter">
        Players Connected: {gameState.numberOfPlayers}
      </div>

      {!gameState.started ? (
        <input
          type="button"
          onClick={() => socketEmitters.startGame()}
          value="Click to Start"
        />
      ) : (
        <div className="game-board">
          {gameState.cards?.map((card) => {
            return (
              <div className="card" key={card}>
                {card}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
