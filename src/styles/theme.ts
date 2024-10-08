import type { DefaultTheme } from 'styled-components';

export const baseTheme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#333333',
    blue: '#2F80ED',
    blueAlpha: '#2F80ED99',
    lightBlue: '#2F80ED99',
    lightBlueAlpha: '#2F80ED1A',
    gray: '#F1F1F1',
    lightGray: '#DDDDDD',
    darkGray: '#AAAAAA',
    red: '#AA0000',
  },
  font: {
    size: {
      xs: '12px',
      sm: '13px',
      md: '14px',
      lg: '15px',
    },
    weight: {
      regular: 400,
      semibold: 600,
      bold: 700,
    },
  },
  constants: {
    calendarWidth: '250px',
    padding: {
      xs: '5px',
      sm: '8px',
      md: '10px',
      lg: '15px',
    },
    borderRadius: '8px',
    size: {
      sm: '16px',
      md: '32px',
    },
    gap: {
      sm: '8px',
    },
    borderWidth: '1px',
    transitionTime: {
      md: '0.3s',
    },
    opacity: {
      sm: 0.4,
      md: 0.5,
      lg: 0.7,
    },
  },
};
