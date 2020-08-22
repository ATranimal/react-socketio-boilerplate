import React from "react";
import { GameState } from "../models/GameState";
import { SocketEmitters } from "../models/SocketEmitters";

interface WaitingPageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
  roomName: string;
  userName: string;
}

export const WaitingPage = (props: WaitingPageProps) => {
  const { gameState, socketEmitters, roomName, userName } = props;

  return (
    <div className="waiting-page">
      <h2>Waiting for players to connect...</h2>
      <div className="room-display">
        <div className="room-display-name">Room Name: {roomName}</div>
      </div>
      <div className="player-count">
        <label className="player-count-label">Players:</label>
        {gameState?.players?.map((player, idx) => {
          return (
            <div className="player-name" key={idx}>
              {player}
            </div>
          );
        })}
      </div>
      {gameState?.players?.[0] === userName && (
        <div className="game-start">
          <h3> You're the host. </h3>
          <input
            type="button"
            onClick={() => socketEmitters.startGame()}
            value="Click to Start"
          />
        </div>
      )}
    </div>
  );
};
