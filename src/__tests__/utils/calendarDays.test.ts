import { WeekStartDay } from '@/constants/calendar';
import { getCalendarDays } from '@/utils/calendarDays';

describe('getCalendarDays', () => {
  it('should return correct calendar days for a month starting on Monday', () => {
    const currentDate = new Date(2023, 4, 1); // May 1, 2023 (Monday)
    const result = getCalendarDays(currentDate, WeekStartDay.Monday);

    expect(result.length).toBe(35);
    expect(result[0].value).toBe('1');
    expect(result[30].value).toBe('31');
    expect(result[31].value).toBe('1');
    expect(result[34].value).toBe('4');
  });

  it('should return correct calendar days for a month starting on Sunday', () => {
    const currentDate = new Date(2023, 9, 1); // October 1, 2023 (Sunday)
    const result = getCalendarDays(currentDate, WeekStartDay.Sunday);

    expect(result.length).toBe(35);
    expect(result[0].value).toBe('1');
    expect(result[30].value).toBe('31');
    expect(result[31].value).toBe('1');
    expect(result[34].value).toBe('4');
  });

  it('should handle weekends correctly when chooseWeekends is true', () => {
    const currentDate = new Date(2023, 5, 1); // June 1, 2023
    const result = getCalendarDays(currentDate, WeekStartDay.Monday, true);

    expect(result.find((day) => day.value === '3')?.isDisabled).toBe(true); // Saturday
    expect(result.find((day) => day.value === '4')?.isDisabled).toBe(true); // Sunday
    expect(result.find((day) => day.value === '5')?.isDisabled).toBe(false); // Monday
  });
});
