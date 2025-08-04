import type { Preview } from "@storybook/react-vite";

import "../src/styles/styles.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: "Dark", value: "#333" },
        light: { name: "Light", value: "#F7F9F2" },
        // 👇 Add your own
        challengeBackground: { name: "Challenge Background", value: "#f4d04e" },
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: "challengeBackground" },
  },
};

export default preview;
