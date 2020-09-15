import React from "react";
import { CardType } from "../models/CardType";
import { SocketEmitters } from "../models/SocketEmitters";

import "./DrawPile.scss";
import { getStringFromCardType, getColourFromCardType } from "../util/CardText";

interface DrawPileProps {
  cardType: CardType;
  socketEmitters: SocketEmitters;
  disabled: boolean;
}

export const DrawPile = (props: DrawPileProps) => {
  const { cardType, socketEmitters, disabled } = props;

  const addNewCard = (cardType: CardType) => {
    socketEmitters.nextTurn(cardType);
  };

  return (
    <div className="draw-pile">
      <div
        className="card"
        style={{
          backgroundColor: getColourFromCardType(cardType)
        }}
        onClick={() => addNewCard(cardType)}
      >
        {getStringFromCardType(cardType)}
      </div>
    </div>
  );
};
