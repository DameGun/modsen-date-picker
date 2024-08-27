import { Component } from 'react';
import { Calendar } from '@/components';
import { CalendarType } from '@/constants/calendar';
import type { CalendarCreatorProps } from '@/types/calendar';
import {
  withDatePicker,
  withHolidays,
  withMinMaxValues,
  withMonthPicker,
  withTodoList,
  withYearPicker,
} from './decorators';

export default class DatePickerCreator extends Component<CalendarCreatorProps> {
  constructor(props: CalendarCreatorProps) {
    super(props);
  }
  public static renderDatePicker = withDatePicker(withHolidays(withMinMaxValues(Calendar)));

  public static renderDatePickerWithTodoList = withDatePicker(
    withHolidays(withMinMaxValues(withTodoList(Calendar)))
  );

  public static renderMonthPicker = withMonthPicker(withMinMaxValues(Calendar));

  public static renderYearPicker = withYearPicker(withMinMaxValues(Calendar));

  render() {
    switch (this.props.type) {
      case CalendarType.Date: {
        let DatePicker = DatePickerCreator.renderDatePicker;
        if (this.props.withTodoList) {
          DatePicker = DatePickerCreator.renderDatePickerWithTodoList;
        }
        return <DatePicker {...this.props} />;
      }
      case CalendarType.Month: {
        const MonthPicker = DatePickerCreator.renderMonthPicker;
        return <MonthPicker {...this.props} />;
      }
      case CalendarType.Year: {
        const YearPicker = DatePickerCreator.renderYearPicker;
        return <YearPicker {...this.props} />;
      }
    }
  }
}
