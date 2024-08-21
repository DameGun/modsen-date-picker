import styled from 'styled-components';
import StyledCalendarItem from '../CalendarItem/styled';

const StyledHolidayTooltip = styled.span`
  position: absolute;
  bottom: 110%;
  max-width: 500px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);

  visibility: hidden;
  background-color: ${(props) => props.theme.colors.lightGray};
  color: ${(props) => props.theme.colors.black};
  padding: ${(props) => props.theme.constants.padding.xs};
  border-radius: ${(props) => props.theme.constants.borderRadius};

  opacity: 0;
  transition: opacity 0.3s;

  ${StyledCalendarItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

export default StyledHolidayTooltip;
