import { CalendarThemeColors } from './styling';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: CalendarThemeColors;
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
      transitionTime: {
        md: string;
      };
      opacity: {
        sm: number;
        md: number;
        lg: number;
      };
    };
  }
}
