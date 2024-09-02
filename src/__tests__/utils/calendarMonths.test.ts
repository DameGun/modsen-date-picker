import { getCalendarMonths } from '@/utils/calendarMonths';

describe('getCalendarMonths', () => {
  it('should return an array of 12 months', () => {
    const currentDate = new Date(2023, 0, 1);
    const result = getCalendarMonths(currentDate);
    expect(result.length).toBe(12);
  });

  it('should return correct month short names', () => {
    const currentDate = new Date(2023, 0, 1);
    const result = getCalendarMonths(currentDate);
    const expectedMonths = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    result.forEach((month, index) => {
      expect(month.value).toBe(expectedMonths[index]);
    });
  });

  it('should set isDisabled to false for all months', () => {
    const currentDate = new Date(2023, 0, 1);
    const result = getCalendarMonths(currentDate);
    result.forEach((month) => {
      expect(month.isDisabled).toBe(false);
    });
  });
});
