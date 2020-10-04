import React, { useState } from "react";
import { GameState } from "../models/GameState";
import { Card } from "../Card";
import { isYourTurn } from "../util/Turn";
import { SocketEmitters } from "../models/SocketEmitters";
import { CardType } from "../models/CardType";
import { RoomInfo } from "./RoomInfo";
import { DrawPile } from "./DrawPile";

import "./PlayPage.scss";
import { getCardTypeFromID } from "../util/CardText";
import CustomScroll from "react-custom-scroll";

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
          style={{ top: isThemeOpen ? "50%" : "-10%"}}
          onClick={() => {
            setIsThemeOpen(!isThemeOpen);
          }}
        >
          <Card id={gameState && gameState.cards ? gameState.cards[0] : 1} />
        </div>

        <div className="card-buttons">
          <div className="card-rows">
            <DrawPile
              cardType={CardType.Event}
              socketEmitters={socketEmitters}
              disabled={!isYourTurn(gameState, userName)}
            />
            {gameState?.cards?.map(card => {
              if (getCardTypeFromID(card) === CardType.Event) {
                return <Card key={card} id={card} />;
              }
            })}
          </div>
          <div className="card-rows">
            <DrawPile
              cardType={CardType.Thing}
              socketEmitters={socketEmitters}
              disabled={!isYourTurn(gameState, userName)}
            />
            {gameState?.cards?.map(card => {
              if (getCardTypeFromID(card) === CardType.Thing) {
                return <Card key={card} id={card} />;
              }
            })}
          </div>
          <div className="card-rows">
            <DrawPile
              cardType={CardType.Inhabitant}
              socketEmitters={socketEmitters}
              disabled={!isYourTurn(gameState, userName)}
            />
            {gameState?.cards?.map(card => {
              if (getCardTypeFromID(card) === CardType.Inhabitant) {
                return <Card key={card} id={card} />;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
