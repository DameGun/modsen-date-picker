import { ComponentType, useMemo } from 'react';
import { CalendarProps } from '@/types';
import { UserStylingProps } from '@/types/styling';
import { parseUserStylingPropsToTheme } from '@/utils/styling';

export default function withStyling(WrappedComponent: ComponentType<CalendarProps>) {
  const StyledCalendar = ({ customTheme, ...props }: CalendarProps & UserStylingProps) => {
    const parsedStylingProps = useMemo(
      () => parseUserStylingPropsToTheme(customTheme!),
      [customTheme]
    );

    return <WrappedComponent {...props} theme={parsedStylingProps} />;
  };

  return StyledCalendar;
}
