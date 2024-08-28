import styled from 'styled-components';

export const WeekDaysHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  padding: 0 ${(props) => props.theme.constants.padding.md};
`;

export const StyledWeekDay = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.semibold};
`;
