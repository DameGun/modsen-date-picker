type CalendarThemeColors = {
  white: string;
  black: string;
  blue: string;
  blueAlpha: string;
  lightBlue: string;
  lightBlueAlpha: string;
  gray: string;
  lightGray: string;
  darkGray: string;
  red: string;
};

type HexColor = string & { hexColor: true };

type CalendarCustomTheme = {
  mainTextColor: HexColor;
  mainColor: HexColor;
  selectedBgColor: HexColor;
  focusedTextColor: HexColor;
  rangeBgColor: HexColor;
  hoverBgColor: HexColor;
  secondaryTextColor: HexColor;
  disableTextColor: HexColor;
  holidaysTextColor: HexColor;
};

interface StylingProps {
  theme?: CalendarThemeColors;
}

interface UserStylingProps {
  customTheme?: Partial<CalendarCustomTheme>;
}

export type { CalendarCustomTheme, CalendarThemeColors, HexColor, StylingProps, UserStylingProps };
