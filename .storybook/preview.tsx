import React from 'react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { DatePickerContextProvider } from '../src/services/context/datePickerContext';
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
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        base: baseTheme,
      },
      defaultTheme: 'base',
      GlobalStyles,
      Provider: ThemeProvider,
    }),
    (Story, { parameters }) => (
      <DatePickerContextProvider
        type={parameters['type']}
        onChange={(value) => console.log('User will get:', value)}
      >
        <Story />
      </DatePickerContextProvider>
    ),
  ],
};

export default preview;
