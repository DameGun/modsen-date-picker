import { baseTheme } from '@/styles/theme';
import { CalendarCustomTheme, CalendarThemeColors, HexColor } from '@/types/styling';

function isValidHexColor(color: string): color is HexColor {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}

export function parseUserStylingPropsToTheme(
  userTheme: Partial<CalendarCustomTheme>
): CalendarThemeColors {
  const {
    mainColor,
    mainTextColor,
    secondaryTextColor,
    disableTextColor,
    focusedTextColor,
    rangeBgColor,
    selectedBgColor,
    holidaysTextColor,
    hoverBgColor,
  } = userTheme;

  const parsed: Partial<CalendarThemeColors> = {
    black: mainTextColor,
    white: mainColor,
    blue: selectedBgColor,
    blueAlpha: focusedTextColor,
    lightBlueAlpha: rangeBgColor,
    gray: hoverBgColor,
    darkGray: secondaryTextColor,
    lightGray: disableTextColor,
    red: holidaysTextColor,
  };

  const filteredParsed = Object.fromEntries(
    Object.entries(parsed).filter((value) => value[1] !== undefined && isValidHexColor(value[1]))
  ) as Partial<CalendarThemeColors>;

  const result: CalendarThemeColors = { ...baseTheme.colors, ...filteredParsed };

  return result;
}
