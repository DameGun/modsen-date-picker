import { useState } from 'react';
import { CalendarItem } from '@/components';
import type { CalendarItemsListProps } from '@/types/calendar';
import StyledCalendarItemsList from './styled';

export default function CalendarItemsList({ type, onItemClick, items }: CalendarItemsListProps) {
  const [selectedId, setSelectedId] = useState('');

  const handleSelected = (id: string) => setSelectedId(id);

  return (
    <StyledCalendarItemsList $type={type}>
      {items.map((item) => (
        <CalendarItem
          item={item}
          key={item.id}
          onItemClick={onItemClick}
          onSelected={handleSelected}
          selectedId={selectedId}
        />
      ))}
    </StyledCalendarItemsList>
  );
}
