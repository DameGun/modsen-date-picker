export const getFullDateString = (date: Date) =>
  date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

export const getMonthYearDateString = (date: Date) =>
  date.toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });

export const getMonthShortDateString = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short' });

export const getYearDateString = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric' });

export const getMonthLongYearDateString = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
