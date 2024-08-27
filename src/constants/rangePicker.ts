import { PlaceholderMaskType } from './input';

enum ParseCalendarTypeToRangeType {
  Date = PlaceholderMaskType.DateRange,
  Month = PlaceholderMaskType.MonthRange,
  Year = PlaceholderMaskType.YearRange,
}

export { ParseCalendarTypeToRangeType };
