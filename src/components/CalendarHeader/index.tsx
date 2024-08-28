import { nextIcon, prevIcon } from '@/assets/icons';
import { IconButton } from '@/components';
import type { CalendarHeaderProps } from '@/types/calendar';
import StyledCalendarHeader from './styled';

export default function CalendarHeader({
  onNext,
  headerText,
  onPrevious,
  disablePreviousButton,
  disableNextButton,
}: CalendarHeaderProps) {
  return (
    <StyledCalendarHeader>
      <IconButton icon={prevIcon} onClick={onPrevious} isDisabled={disablePreviousButton} />
      {headerText}
      <IconButton icon={nextIcon} onClick={onNext} isDisabled={disableNextButton} />
    </StyledCalendarHeader>
  );
}
