import type { Meta, StoryObj } from "@storybook/react-vite";

import SocialLinksProfile from "./SocialLinksProfile";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/SocialLinksProfile",
  component: SocialLinksProfile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SocialLinksProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SocialLinksProfileDefault: Story = {};
