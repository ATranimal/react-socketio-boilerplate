import React from "react";
import { getCardTextFromID, getCardTypeFromID } from "./util/CardText";

import "./Card.scss";
import { CardType } from "./models/CardType";
interface CardProps {
  id: number;
}

export const Card = (props: CardProps) => {
  const { id } = props;

  const getColourFromId = (id: number): string => {
    const cardType = getCardTypeFromID(id);

    let colour = "";
    switch (cardType) {
      case CardType.Theme:
        colour = "#9ec5de";
        break;
      case CardType.Event:
        colour = "#c8e6cd";
        break;
      case CardType.Thing:
        colour = "#f7f1bf";
        break;
      case CardType.Inhabitant:
        colour = "#f2acac";
        break;
      default:
        break;
    }

    return colour;
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: getColourFromId(id),
      }}
    >
      <div className="text">{getCardTextFromID(id)}</div>
    </div>
  );
};
