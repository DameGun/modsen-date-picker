import { Component } from 'react';
import { Calendar } from '@/components';
import { CalendarType } from '@/constants/calendar';
import type { CalendarCreatorProps } from '@/types/calendar';
import type { DatePickerProps } from '@/types/datePicker';
import type { MonthPickerProps } from '@/types/monthPicker';
import { YearPickerProps } from '@/types/yearPicker';
import {
  withDatePicker,
  withHolidays,
  withMinMaxValues,
  withMonthPicker,
  withRangePicker,
  withTodoList,
  withYearPicker,
} from './decorators';

export default class DatePickerCreator extends Component<CalendarCreatorProps> {
  constructor(props: CalendarCreatorProps) {
    super(props);
  }

  private renderDatePicker(props: DatePickerProps) {
    let basePicker = Calendar;

    if (props.withRangePicker) basePicker = withRangePicker(basePicker);
    if (props.withTodoList) basePicker = withTodoList(basePicker);
    if (props.minDate || props.maxDate) basePicker = withMinMaxValues(basePicker);
    if (props.holidaysCountry) basePicker = withHolidays(basePicker);

    return withDatePicker(basePicker);
  }

  private renderMonthPicker(props: MonthPickerProps) {
    let basePicker = Calendar;

    if (props.withRangePicker) basePicker = withRangePicker(basePicker);
    if (props.minDate || props.maxDate) basePicker = withMinMaxValues(basePicker);

    return withMonthPicker(basePicker);
  }

  private renderYearPicker(props: YearPickerProps) {
    let basePicker = Calendar;

    if (props.withRangePicker) basePicker = withRangePicker(basePicker);
    if (props.minDate || props.maxDate) basePicker = withMinMaxValues(basePicker);

    return withYearPicker(basePicker);
  }

  render() {
    switch (this.props.type) {
      case CalendarType.Date: {
        const DatePicker = this.renderDatePicker(this.props);

        return <DatePicker {...this.props} />;
      }
      case CalendarType.Month: {
        const MonthPicker = this.renderMonthPicker(this.props);

        return <MonthPicker {...this.props} />;
      }
      case CalendarType.Year: {
        const YearPicker = this.renderYearPicker(this.props);

        return <YearPicker {...this.props} />;
      }
    }
  }
}
