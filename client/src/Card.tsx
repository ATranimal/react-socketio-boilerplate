import React from "react";
import { getCardTextFromID, getColourFromId } from "./util/CardText";
import "simplebar";

import "./Card.scss";

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
      <div className="text" data-simplebar>
        {getCardTextFromID(id)}
      </div>
    </div>
  );
};
