enum CalendarType {
  Year = 'Year',
  Month = 'Month',
  Date = 'Date',
}

enum ChangeActionType {
  Click = 'Click',
  Input = 'Input',
}

enum WeekStartDay {
  Monday = 'Monday',
  Sunday = 'Sunday',
}

const weekDays: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

export { CalendarType, ChangeActionType, weekDays, WeekStartDay };
