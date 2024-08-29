import styled from 'styled-components';

const StyledButton = styled.button<{ $isDisabled?: boolean; $isUnavaliable?: boolean }>`
  all: unset;
  cursor: ${(props) => (props.$isDisabled ? 'default' : 'pointer')};
  opacity: ${(props) => (props.$isUnavaliable ? props.theme.constants.opacity.sm : 1)};
  pointer-events: ${(props) => props.$isUnavaliable && 'none'};
`;

export default StyledButton;
