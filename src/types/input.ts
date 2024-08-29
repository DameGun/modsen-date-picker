import { CalendarProps } from './calendar';

interface InputProps extends Pick<CalendarProps, 'onInputChange' | 'placeholderMask'> {
  onFocus: VoidFunction;
}

export type { InputProps };
