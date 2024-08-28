import styled from 'styled-components';
import { CalendarType } from '@/constants/calendar';
import {
  CALENDAR_LIST_BASE_COLS,
  CALENDAR_LIST_BASE_ROWS,
  CALENDAR_LIST_SECONDARY_COLS,
  CALENDAR_LIST_SECONDARY_ROWS,
} from '@/constants/layout';

const StyledCalendarItemsList = styled.div<{ $type: CalendarType }>`
  display: grid;

  grid-template-columns: repeat(
    ${(props) =>
      props.$type === CalendarType.Date ? CALENDAR_LIST_BASE_COLS : CALENDAR_LIST_SECONDARY_COLS},
    1fr
  );

  grid-template-rows: repeat(
    ${(props) =>
      props.$type === CalendarType.Date ? CALENDAR_LIST_BASE_ROWS : CALENDAR_LIST_SECONDARY_ROWS},
    1fr
  );

  padding: 0 ${(props) => props.theme.constants.padding.md};
`;

export default StyledCalendarItemsList;
