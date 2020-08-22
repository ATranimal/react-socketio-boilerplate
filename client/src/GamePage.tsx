import React from "react";

import { GameState } from "./models/GameState";
import { SocketEmitters } from "./models/SocketEmitters";
import { WaitingPage } from "./GamePage/WaitingPage";
import { PlayPage } from "./GamePage/PlayPage";

import "./GamePage.scss";

interface GamePageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
  userName: string;
  roomName: string;
}

export const GamePage = (props: GamePageProps) => {
  const { gameState, socketEmitters, userName, roomName } = props;

  const renderErrorPage = () => {
    return (
      <div className="error-page">
        Error connecting.
        <button></button>
      </div>
    );
  };

  return gameState.started ? (
    <PlayPage
      gameState={gameState}
      socketEmitters={socketEmitters}
      userName={userName}
      roomName={roomName}
    />
  ) : gameState.started === null ? (
    renderErrorPage()
  ) : (
    <WaitingPage
      gameState={gameState}
      socketEmitters={socketEmitters}
      userName={userName}
      roomName={roomName}
    />
  );
};
