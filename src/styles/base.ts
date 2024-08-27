import { css } from 'styled-components';

export const baseContainerStyles = css`
  border-width: ${(props) => props.theme.constants.borderWidth};
  border-style: solid;
  border-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.constants.borderRadius};
`;

export const baseContainerBlockStyles = css`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.constants.padding.sm}
    ${(props) => props.theme.constants.padding.lg};
`;

export const customScrollbarStyles = css`
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.gray};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.darkGray};
  }
`;
