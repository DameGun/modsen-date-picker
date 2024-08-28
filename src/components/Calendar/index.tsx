import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CalendarHeader, CalendarItemsList, Input } from '@/components';
import { baseTheme } from '@/styles/theme';
import type { CalendarProps } from '@/types/calendar';
import { CalendarLabel, CalendarWrapper, StyledCalendar } from './styled';

export default function Calendar({
  type,
  onChange,
  additionalHeader: weeksHeader,
  items,
  ...calendarHeaderProps
}: CalendarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleBlur(event: MouseEvent) {
    if (calendarRef.current) {
      if (!calendarRef.current.contains(event.target as HTMLElement)) handleClose();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleBlur);

    return () => {
      document.removeEventListener('mousedown', handleBlur);
    };
  }, []);

  return (
    <ThemeProvider theme={baseTheme}>
      <CalendarWrapper>
        <CalendarLabel>Date</CalendarLabel>
        <Input type={type} onFocus={handleOpen} onChange={onChange} />
        {isOpen && (
          <StyledCalendar ref={calendarRef} tabIndex={0}>
            <CalendarHeader {...calendarHeaderProps} />
            {weeksHeader}
            <CalendarItemsList type={type} items={items} onChange={onChange} />
          </StyledCalendar>
        )}
      </CalendarWrapper>
    </ThemeProvider>
  );
}
