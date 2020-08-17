import React from "react";

import { GameState } from "./models/GameState";
import { SocketEmitters } from "./models/SocketEmitters";
import { Card } from "./Card";
import { CardType } from "./models/CardType";

import "./GamePage.scss";

interface GamePageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
  userName: string;
  roomName: string;
}

export const GamePage = (props: GamePageProps) => {
  const { gameState, socketEmitters, userName, roomName } = props;

  const isYourTurn = () => {
    if (gameState?.players !== null && gameState?.playerTurn !== null) {
      return gameState.players[gameState.playerTurn] === userName;
    }
    return false;
  };

  const renderWaitingPage = () => {
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

  const renderGamePage = () => {
    return (
      <div className="game">
        <div className="player-counter">
          <div className="room-name">{roomName}</div>
          <div className="players-connected">
            Players Connected: {gameState?.players?.length}
          </div>
          <div className="turn-indicator">
            Your turn? {isYourTurn().toString()}
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
              disabled={!isYourTurn()}
            ></input>
            <input
              type="button"
              onClick={() => socketEmitters.nextTurn(CardType.Thing)}
              value="Thing"
              disabled={!isYourTurn()}
            ></input>
            <input
              type="button"
              onClick={() => socketEmitters.nextTurn(CardType.Inhabitant)}
              value="Inhabitant"
              disabled={!isYourTurn()}
            ></input>
          </div>
        </div>
      </div>
    );
  };

  const renderErrorPage = () => {
    return (
      <div className="error-page">
        Error connecting.
        <button></button>
      </div>
    );
  };

  return gameState.started
    ? renderGamePage()
    : gameState.started === null
    ? renderErrorPage()
    : renderWaitingPage();
};
