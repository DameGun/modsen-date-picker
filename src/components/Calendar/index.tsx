import { ThemeProvider } from 'styled-components';
import { CalendarLabel, CalendarWrapper, StyledCalendar, StyledCalendarDay } from './styled';

import { CalendarHeader, Input } from '@/components';
import { baseTheme } from '@/styles/theme';

export default function Calendar() {
  return (
    <ThemeProvider theme={baseTheme}>
      <CalendarWrapper>
        <CalendarLabel>Date</CalendarLabel>
        <Input />
        <StyledCalendar>
          <CalendarHeader />
          {Array.from({ length: 31 }, (v, i) => i + 1).map((_, i) => (
            <StyledCalendarDay key={i}>{i + 1}</StyledCalendarDay>
          ))}
        </StyledCalendar>
      </CalendarWrapper>
    </ThemeProvider>
  );
}
