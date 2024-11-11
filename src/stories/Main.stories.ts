import { Meta, StoryObj } from "@storybook/react";

import { Main } from "./Main/Main";

export default {
  title: "Main",
  component: Main,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "react",
    p: "p",
  },
} as Meta;

export const Default: StoryObj = {};
