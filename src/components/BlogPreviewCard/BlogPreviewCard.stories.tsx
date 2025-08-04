import type { Meta, StoryObj } from "@storybook/react-vite";

import BlogPreviewCard from "./BlogPreviewCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BlogPreviewCard",
  component: BlogPreviewCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlogPreviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BlogPreviewCardDefault: Story = {};
