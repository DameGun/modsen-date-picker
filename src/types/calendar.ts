import { ReactNode } from 'react';
import { CalendarType, ChangeActionType } from '@/constants/calendar';
import { DatePickerProps } from './datePicker';
import { HolidayItem } from './holidays';
import { MonthPickerProps } from './monthPicker';
import { YearPickerProps } from './yearPicker';

type CalendarItemType = {
  id: string;
  value: string;
  isDisabled: boolean;
  holiday?: HolidayItem;
};

interface Calendar {
  type: CalendarType;
  onChange(newDate: string, actionType?: ChangeActionType): void;
}

interface ServiceCalendarProps {
  items: CalendarItemType[];
  additionalHeader?: ReactNode;
}

interface CalendarHeaderProps {
  onNext: VoidFunction;
  onPrevious: VoidFunction;
  headerText: string;
  disablePreviousButton?: boolean;
  disableNextButton?: boolean;
}

interface CalendarItemProps extends Pick<Calendar, 'onChange'> {
  item: CalendarItemType;
  selectedId: string;
  onSelected(id: string): void;
}

interface CalendarLimitations {
  minDate?: Date;
  maxDate?: Date;
}

type CalendarItemsListProps = Calendar & Pick<ServiceCalendarProps, 'items'>;

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
};
