import { useContext } from 'react';
import { HolidayTooltip } from '@/components';
import { ChangeActionType } from '@/constants/calendar';
import { DatePickerContext } from '@/services/context/datePickerContext';
import type { CalendarItemProps } from '@/types/calendar';
import { getFullDateString } from '@/utils/localeDate';
import StyledCalendarItem from './styled';

export default function CalendarItem({
  item,
  onChange,
  onSelected,
  selectedId,
}: CalendarItemProps) {
  const { currentDate } = useContext(DatePickerContext);

  function handleClick() {
    if (!item.isDisabled) {
      onChange(item.id, ChangeActionType.Click);
      onSelected(item.id);
    }
  }

  return (
    <StyledCalendarItem
      $isDisabled={item.isDisabled}
      $isFocused={item.id === getFullDateString(currentDate)}
      $isSelected={item.id === selectedId}
      $isHoliday={Boolean(item.holiday)}
      onClick={handleClick}
    >
      {item.value}
      {item.holiday && <HolidayTooltip>{item.holiday.name}</HolidayTooltip>}
    </StyledCalendarItem>
  );
}
