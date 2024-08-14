import { StyledCalendarHeader } from './styled';

import { nextIcon, prevIcon } from '@/assets/icons';
import { IconButton } from '@/components';

export default function CalendarHeader() {
  return (
    <StyledCalendarHeader>
      <IconButton icon={prevIcon} />
      November 2022
      <IconButton icon={nextIcon} />
    </StyledCalendarHeader>
  );
}
