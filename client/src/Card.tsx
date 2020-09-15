import React from "react";
import { getCardTextFromID, getColourFromId } from "./util/CardText";

import "./Card.scss";
import { CardType } from "./models/CardType";
interface CardProps {
  id: number;
}

export const Card = (props: CardProps) => {
  const { id } = props;

  return (
    <div
      className="card"
      style={{
        backgroundColor: getColourFromId(id)
      }}
    >
      <div className="text">{getCardTextFromID(id)}</div>
    </div>
  );
};
