import React from "react";
import { Card } from "../Card";

export default {
  title: "Card",
  component: Card,
};

export const ToStorybook = () => <Card id={0} />;

ToStorybook.story = {
  name: "default",
};
