import { useState } from 'react';
import { CalendarItem } from '@/components';
import type { CalendarItemsListProps } from '@/types/calendar';
import StyledCalendarItemsList from './styled';

export default function CalendarItemsList({ type, onChange, items }: CalendarItemsListProps) {
  const [selectedId, setSelectedId] = useState<string>('');

  function handleSelected(id: string) {
    setSelectedId(id);
  }

  return (
    <StyledCalendarItemsList $type={type}>
      {items.map((item) => (
        <CalendarItem
          item={item}
          key={item.id}
          onChange={onChange}
          onSelected={handleSelected}
          selectedId={selectedId}
        />
      ))}
    </StyledCalendarItemsList>
  );
}
