import React from "react";

import CustomScroll from "react-custom-scroll";

import { getCardTextFromID, getColourFromId } from "./util/CardText";

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
      <div className="text">
        <CustomScroll heightRelativeToParent="calc(100%)">
          {getCardTextFromID(id)}
        </CustomScroll>
      </div>
    </div>
  );
};
