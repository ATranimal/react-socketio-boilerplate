import React from "react";
import { GameState } from "../models/GameState";
import { Card } from "../Card";
import { isYourTurn } from "../util/Turn";
import { SocketEmitters } from "../models/SocketEmitters";
import { CardType } from "../models/CardType";

interface PlayPageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
  roomName: string;
  userName: string;
}

export const PlayPage = (props: PlayPageProps) => {
  const { gameState, socketEmitters, roomName, userName } = props;

  return (
    <div className="game">
      <div className="player-counter">
        <div className="room-name">{roomName}</div>
        <div className="players-connected">
          Players Connected: {gameState?.players?.length}
        </div>
        <div className="turn-indicator">
          Your turn? {isYourTurn(gameState, userName).toString()}
        </div>
      </div>

      <div className="game-board">
        <div className="cards">
          {gameState?.cards?.map((card) => {
            return (
              <div key={card}>
                <Card id={card} />
              </div>
            );
          })}
        </div>

        <div className="card-buttons">
          <input
            type="button"
            onClick={() => socketEmitters.nextTurn(CardType.Event)}
            value="Event"
            disabled={!isYourTurn(gameState, userName)}
          ></input>
          <input
            type="button"
            onClick={() => socketEmitters.nextTurn(CardType.Thing)}
            value="Thing"
            disabled={!isYourTurn(gameState, userName)}
          ></input>
          <input
            type="button"
            onClick={() => socketEmitters.nextTurn(CardType.Inhabitant)}
            value="Inhabitant"
            disabled={!isYourTurn(gameState, userName)}
          ></input>
        </div>
      </div>
    </div>
  );
};
