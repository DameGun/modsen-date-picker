import styled from 'styled-components';
import { baseContainerStyles } from '@/styles/base';

export const CalendarWrapper = styled.div`
  position: relative;
  width: ${(props) => props.theme.constants.calendarWidth};
`;

export const StyledCalendar = styled.div`
  ${baseContainerStyles}
  width: 100%;
  height: auto;
  overflow: hidden;

  position: absolute;
  margin-top: ${(props) => props.theme.constants.padding.xs};
  padding: ${(props) => props.theme.constants.padding.md} 0;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;

export const CalendarLabel = styled.label`
  font-size: ${(props) => props.theme.font.size.lg};
  font-weight: ${(props) => props.theme.font.weight.semibold};
`;
