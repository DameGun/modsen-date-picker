import styled from 'styled-components';
import { baseContainerStyles } from '@/styles/base';

const StyledInput = styled.input`
  all: unset;
  ${baseContainerStyles}

  padding: ${(props) => props.theme.constants.padding.sm} ${(props) =>
    props.theme.constants.padding.sm};

  font-size: ${(props) => props.theme.font.size.sm};

  &::placeholder {
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

export default StyledInput;
