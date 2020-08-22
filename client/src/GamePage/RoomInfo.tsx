import React, { useState } from "react";
import { GameState } from "../models/GameState";
import { PlayerList } from "./PlayerList";
import { isYourTurn } from "../util/Turn";

import "./RoomInfo.scss";

interface RoomInfoProps {
  gameState: GameState;
  roomName: string;
  userName: string;
}

export const RoomInfo = (props: RoomInfoProps) => {
  const { gameState, roomName, userName } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={"room-info" + (isOpen ? " opened" : "")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="room-name">{roomName}</div>
      <PlayerList
        players={gameState?.players}
        activePlayerIndex={gameState.playerTurn}
      />
    </div>
  );
};
