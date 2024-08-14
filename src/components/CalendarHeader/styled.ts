import styled from 'styled-components';

export const StyledCalendarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.constants.padding.xs} 0;

  font-weight: ${(props) => props.theme.font.weight.semibold};
`;
