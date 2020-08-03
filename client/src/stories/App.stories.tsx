import React from "react";
import App from "../App";

export default {
  title: "App",
  component: App
};

export const ToStorybook = () => <App />;

ToStorybook.story = {
  name: "to Storybook"
};
