import { Meta, StoryObj } from "@storybook/react";

import Iop from "./Iop";

export default {
  title: "Iop",
  component: Iop,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "react",
    p: "p",
  },
} as Meta;

export const Default: StoryObj = {};
