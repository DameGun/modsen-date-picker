import styled from 'styled-components';
import { Button } from '@/components';

const StyledCalendarItem = styled(Button)<{
  $isDisabled: boolean;
  $isSelected: boolean;
  $isHoliday: boolean;
  $isFocused: boolean;
  $isStartRange?: boolean;
  $isInsideRange?: boolean;
  $isEndRange?: boolean;
}>`
  text-align: center;
  position: relative;
  border-radius: ${(props) => props.theme.constants.borderRadius};
  font-size: ${(props) => props.theme.font.size.sm};
  height: ${(props) => props.theme.constants.size.md};
  &:hover {
    background-color: ${(props) => !props.$isDisabled && props.theme.colors.gray};
  }

  ${(props) =>
    props.$isStartRange &&
    `
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: ${props.theme.colors.blueAlpha};
    color: ${props.theme.colors.white};

    &:hover {
      background-color: ${props.theme.colors.blue};
    }
  `}

  ${(props) =>
    props.$isInsideRange &&
    `
    border-radius: 0;
    color: ${props.theme.colors.blue};
    background-color: ${props.theme.colors.lightBlueAlpha};
  `}

  ${(props) =>
    props.$isEndRange &&
    `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: ${props.theme.colors.blueAlpha};
    color: ${props.theme.colors.white};

    &:hover {
      background-color: ${props.theme.colors.blue};
    }
  `}

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

  ${(props) =>
    props.$isFocused &&
    `
    opacity: ${props.$isFocused && !props.$isSelected ? props.theme.constants.opacity.lg : 1};
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
      opacity: ${props.theme.constants.opacity.lg};
    }
  `};
`;

export default StyledCalendarItem;
