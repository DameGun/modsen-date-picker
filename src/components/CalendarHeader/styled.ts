import styled from 'styled-components';

const StyledCalendarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.constants.padding.xs}
    ${(props) => props.theme.constants.padding.lg};

  font-weight: ${(props) => props.theme.font.weight.semibold};
`;

export default StyledCalendarHeader;
