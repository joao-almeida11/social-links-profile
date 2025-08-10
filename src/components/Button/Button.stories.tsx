import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";
import type { ButtonOrLinkProps } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
  },
} satisfies Meta<ButtonOrLinkProps>;

export default meta;
type Story = StoryObj<ButtonOrLinkProps>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props: ButtonOrLinkProps) => {
    return (
      <Button
        {...props}
        onClick={(): void => {
          console.log("btn clicked");
        }}
      >
        Placeholder
      </Button>
    );
  },
  name: "Button Primary",
  args: {
    children: "Hello",
    type: "button",
  },
};
