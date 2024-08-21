import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      blue: string;
      lightBlue: string;
      gray: string;
      lightGray: string;
      darkGray: string;
      red: string;
    };
    font: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
      };
      weight: {
        regular: number;
        semibold: number;
        bold: number;
      };
    };
    constants: {
      calendarWidth: string;
      padding: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
      };
      gap: {
        sm: string;
      };
      borderRadius: string;
      size: {
        sm: string;
        md: string;
      };
      borderWidth: string;
    };
  }
}
