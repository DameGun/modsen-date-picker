import styled from 'styled-components';
import { Button } from '@/components';

const StyledCalendarItem = styled(Button)<{
  $isDisabled: boolean;
  $isSelected: boolean;
  $isHoliday: boolean;
  $isFocused: boolean;
}>`
  text-align: center;
  position: relative;

  border-radius: ${(props) => props.theme.constants.borderRadius};

  font-size: ${(props) => props.theme.font.size.sm};

  height: ${(props) => props.theme.constants.size.md};

  ${(props) =>
    props.$isDisabled &&
    `
    color: ${props.theme.colors.darkGray};
  `};

  ${(props) =>
    props.$isHoliday &&
    `
    color: ${props.theme.colors.red};
  `};

  &:hover {
    background-color: ${(props) => !props.$isDisabled && props.theme.colors.gray};
  }

  ${(props) =>
    props.$isFocused &&
    `
    opacity: ${props.$isFocused && !props.$isSelected ? 0.6 : 1};
    background-color: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};

     &:hover {
      background-color: ${props.theme.colors.lightBlue};
    }
  `};

  ${(props) =>
    props.$isSelected &&
    `
    background-color: ${props.theme.colors.blue};
    color: ${props.theme.colors.white};

    &:hover {
      background-color: ${props.theme.colors.lightBlue};
    }
  `};
`;

export default StyledCalendarItem;
