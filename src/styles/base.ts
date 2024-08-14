import { css } from 'styled-components';

export const baseContainerStyles = css`
  border-width: ${(props) => props.theme.constants.borderWidth};
  border-style: solid;
  border-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.constants.borderRadius};
`;
