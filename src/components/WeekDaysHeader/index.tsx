import { useMemo } from 'react';
import type { WeekHeaderProps } from '@/types/datePicker';
import { getWeekDays } from '@/utils/datepicker';
import { StyledWeekDay, WeekDaysHeaderContainer } from './styled';

export default function WeekDaysHeader({ weekStartDay }: WeekHeaderProps) {
  const weekDaysValues = useMemo(() => getWeekDays(weekStartDay), [weekStartDay]);

  return (
    <WeekDaysHeaderContainer>
      {weekDaysValues.map((value) => (
        <StyledWeekDay key={value}>{value}</StyledWeekDay>
      ))}
    </WeekDaysHeaderContainer>
  );
}
