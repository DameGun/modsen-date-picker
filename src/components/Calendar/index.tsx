import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { CalendarHeader, CalendarItemsList, Input } from '@/components';
import { baseTheme } from '@/styles/theme';
import type { CalendarProps } from '@/types/calendar';
import { CalendarLabel, CalendarWrapper, StyledCalendar } from './styled';

export default function Calendar({
  type,
  additionalHeader: weeksHeader,
  items,
  children,
  onItemClick,
  onInputChange,
  placeholderMask,
  theme,
  ...calendarHeaderProps
}: CalendarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleBlur = (event: MouseEvent) => {
    if (calendarRef.current) {
      if (!calendarRef.current.contains(event.target as HTMLElement)) handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleBlur);

    return () => {
      document.removeEventListener('mousedown', handleBlur);
    };
  }, []);

  return (
    <ThemeProvider theme={theme ? { ...baseTheme, colors: theme } : baseTheme}>
      <CalendarWrapper>
        <CalendarLabel>Date</CalendarLabel>
        <Input
          placeholderMask={placeholderMask}
          onFocus={handleOpen}
          onInputChange={onInputChange}
        />
        {isOpen && (
          <StyledCalendar ref={calendarRef} tabIndex={0}>
            {children}
            <CalendarHeader {...calendarHeaderProps} />
            {weeksHeader}
            <CalendarItemsList type={type} items={items} onItemClick={onItemClick} />
          </StyledCalendar>
        )}
      </CalendarWrapper>
    </ThemeProvider>
  );
}
