import { ReactNode } from 'react';
import { CalendarType } from '@/constants/calendar';
import { DatePickerProps } from './datePicker';
import { HolidayItem } from './holidays';
import { MonthPickerProps } from './monthPicker';
import { YearPickerProps } from './yearPicker';

type CalendarItemType = {
  id: string;
  value: string;
  isDisabled: boolean;
  holiday?: HolidayItem;
  todoItemsCount?: number;
  isStartRange?: boolean;
  isInsideRange?: boolean;
  isEndRange?: boolean;
};

type DateRange = [Date, Date | null];

type ResultDateType = Date | DateRange;

interface Calendar {
  type: CalendarType;
  onChange?(newDate: ResultDateType): void;
  children?: ReactNode;
}

interface ServiceCalendarProps {
  items: CalendarItemType[];
  additionalHeader?: ReactNode;
  onInputChange(newDate: string): void;
  onItemClick(newDate: string): void;
  placeholderMask: string;
}

interface CalendarHeaderProps {
  onNext: VoidFunction;
  onPrevious: VoidFunction;
  headerText: string;
  disablePreviousButton?: boolean;
  disableNextButton?: boolean;
}

interface CalendarItemProps extends Pick<ServiceCalendarProps, 'onItemClick'> {
  item: CalendarItemType;
  selectedId: string;
  onSelected(id: string): void;
}

interface CalendarLimitations {
  minDate?: Date;
  maxDate?: Date;
}

type CalendarItemsListProps = Pick<Calendar, 'type'> &
  Pick<ServiceCalendarProps, 'items' | 'onItemClick'>;

type CalendarProps = Calendar & ServiceCalendarProps & CalendarHeaderProps;

type CalendarCreatorProps =
  | {
      type: typeof CalendarType;
    }
  | DatePickerProps
  | MonthPickerProps
  | YearPickerProps;

export type {
  Calendar,
  CalendarCreatorProps,
  CalendarHeaderProps,
  CalendarItemProps,
  CalendarItemsListProps,
  CalendarItemType,
  CalendarLimitations,
  CalendarProps,
  DateRange,
  ResultDateType,
};
