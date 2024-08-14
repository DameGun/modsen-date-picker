import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import { baseTheme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      base: baseTheme,
    },
    defaultTheme: 'base',
    GlobalStyles,
    Provider: ThemeProvider,
  }),
];

export default preview;
