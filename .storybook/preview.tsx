import React from "react";
import type { Preview } from "@storybook/react";
import GlobalStyles from "../src/styles/GlobalStyles";
import RabbitProvider from "../src/components/RabbitProvider/RabbitProvider";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles/>
        <RabbitProvider>
          <Story />
        </RabbitProvider>
      </>
    )
  ],
};

export default preview;
