import { Component } from 'react';
import { Calendar } from '@/components';
import { CalendarType } from '@/constants/calendar';
import { CalendarCreatorProps } from '@/types/calendar';
import { withDatePicker, withHolidays, withMonthPicker, withYearPicker } from './decorators';
import withMinMaxDate from './decorators/withMinMaxValues';

export default class DatePickerCreator extends Component<CalendarCreatorProps> {
  constructor(props: CalendarCreatorProps) {
    super(props);
  }
  public static renderDatePicker = withDatePicker(withHolidays(withMinMaxDate(Calendar)));

  public static renderMonthPicker = withMonthPicker(withMinMaxDate(Calendar));

  public static renderYearPicker = withYearPicker(withMinMaxDate(Calendar));

  render() {
    switch (this.props.type) {
      case CalendarType.Date: {
        const DatePicker = DatePickerCreator.renderDatePicker;
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
