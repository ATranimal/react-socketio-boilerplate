import React, { useState } from "react";
import { GameState } from "../models/GameState";
import { Card } from "../Card";
import { isYourTurn } from "../util/Turn";
import { SocketEmitters } from "../models/SocketEmitters";
import { CardType } from "../models/CardType";
import { RoomInfo } from "./RoomInfo";
import { DrawPile } from "./DrawPile";

import "./PlayPage.scss";

interface PlayPageProps {
  gameState: GameState;
  socketEmitters: SocketEmitters;
  roomName: string;
  userName: string;
}

export const PlayPage = (props: PlayPageProps) => {
  const { gameState, socketEmitters, roomName, userName } = props;

  const [isThemeOpen, setIsThemeOpen] = useState(true);

  return (
    <div className="game">
      <RoomInfo gameState={gameState} userName={userName} roomName={roomName} />

      <div
        className="game-board"
        onClick={() => {
          if (isThemeOpen) {
            setIsThemeOpen(false);
          }
        }}
      >
        <div
          className="theme-card"
          style={{ top: isThemeOpen ? "50%" : "-17%" }}
          onClick={() => {
            setIsThemeOpen(!isThemeOpen);
          }}
        >
          <Card id={gameState && gameState.cards ? gameState.cards[0] : 1} />
        </div>
        {/* <div className="cards">
          {gameState?.cards?.map(card => {
            return (
              <div key={card}>
                <Card id={card} />
              </div>
            );
          })}
        </div> */}

        <div className="card-buttons">
          <DrawPile
            cardType={CardType.Event}
            socketEmitters={socketEmitters}
            disabled={!isYourTurn(gameState, userName)}
          />
          <DrawPile
            cardType={CardType.Thing}
            socketEmitters={socketEmitters}
            disabled={!isYourTurn(gameState, userName)}
          />
          <DrawPile
            cardType={CardType.Inhabitant}
            socketEmitters={socketEmitters}
            disabled={!isYourTurn(gameState, userName)}
          />
        </div>
      </div>
    </div>
  );
};
