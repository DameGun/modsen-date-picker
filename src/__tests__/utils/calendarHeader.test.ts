import { CalendarType } from '@/constants/calendar';
import { getCalendarHeaderText } from '@/utils/calendarHeader';

describe('getCalendarHeaderText', () => {
  it('should return year date string for CalendarType.Month', () => {
    const date = new Date(2023, 0, 1); // January 1, 2023
    const result = getCalendarHeaderText(CalendarType.Month, date);
    expect(result).toBe('2023');
  });

  it('should return month long year date string for CalendarType.Date', () => {
    const date = new Date(2023, 5, 15); // June 15, 2023
    const result = getCalendarHeaderText(CalendarType.Date, date);
    expect(result).toBe('June 2023');
  });

  it('should return month long year date string for unknown CalendarType', () => {
    const date = new Date(2023, 11, 31); // December 31, 2023
    const result = getCalendarHeaderText('Unknown' as CalendarType, date);
    expect(result).toBe('December 2023');
  });

  it('should handle leap year correctly', () => {
    const date = new Date(2024, 1, 29); // February 29, 2024 (leap year)
    const result = getCalendarHeaderText(CalendarType.Date, date);
    expect(result).toBe('February 2024');
  });
});
