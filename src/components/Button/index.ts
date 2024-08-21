import styled from 'styled-components';

const StyledButton = styled.button<{ $isDisabled?: boolean }>`
  all: unset;
  cursor: ${(props) => (props.$isDisabled ? 'default' : 'pointer')};
`;

export default StyledButton;
