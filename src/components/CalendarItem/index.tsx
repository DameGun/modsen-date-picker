import { useContext } from 'react';
import { HolidayTooltip } from '@/components';
import { DatePickerContext } from '@/services/context/datePickerContext';
import type { CalendarItemProps } from '@/types/calendar';
import { getFullDateString } from '@/utils/localeDate';
import StyledCalendarItem from './styled';

export default function CalendarItem({
  item,
  onItemClick,
  onSelected,
  selectedId,
}: CalendarItemProps) {
  const { currentDate } = useContext(DatePickerContext);

  function handleClick() {
    if (!item.isDisabled) {
      onItemClick(item.id);
      onSelected(item.id);
    }
  }

  return (
    <StyledCalendarItem
      $isDisabled={item.isDisabled}
      $isFocused={item.id === getFullDateString(currentDate)}
      $isSelected={item.id === selectedId}
      $isHoliday={Boolean(item.holiday)}
      $isStartRange={item.isStartRange}
      $isInsideRange={item.isInsideRange}
      $isEndRange={item.isEndRange}
      onClick={handleClick}
    >
      {item.value}
      {item.holiday && <HolidayTooltip>{item.holiday.name}</HolidayTooltip>}
    </StyledCalendarItem>
  );
}
