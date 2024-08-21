import styled from 'styled-components';
import { baseContainerStyles } from '@/styles/base';

export const InputWrapper = styled.div`
  ${baseContainerStyles}

  padding: ${(props) => props.theme.constants.padding.sm} ${(props) =>
    props.theme.constants.padding.lg};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.constants.gap.sm};

  &:focus-within {
    border-color: ${(props) => props.theme.colors.lightBlue};
  }
`;

export const StyledInput = styled.input`
  all: unset;
  width: 100%;

  font-size: ${(props) => props.theme.font.size.lg};

  &::placeholder {
    color: ${(props) => props.theme.colors.lightGray};
  }
`;
