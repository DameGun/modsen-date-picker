import styled from 'styled-components';

import { baseContainerStyles } from '@/styles/base';

export const CalendarWrapper = styled.div`
  position: relative;
  width: ${(props) => props.theme.constants.calendarWidth};
`;

export const StyledCalendar = styled.div`
  ${baseContainerStyles}

  position: absolute;
  padding: ${(props) => props.theme.constants.padding.md};
  margin-top: ${(props) => props.theme.constants.padding.xs};
`;

export const StyledCalendarDay = styled.button`
  all: unset;
  cursor: pointer;

  border-radius: ${(props) => props.theme.constants.borderRadius};

  text-align: center;
  width: ${(props) => props.theme.constants.size.md};
  height: ${(props) => props.theme.constants.size.md};

  font-size: ${(props) => props.theme.font.size.sm};

  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

export const CalendarLabel = styled.label`
  font-size: ${(props) => props.theme.font.size.lg};
  font-weight: ${(props) => props.theme.font.weight.semibold};
`;
