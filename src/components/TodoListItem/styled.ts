import styled from 'styled-components';

export const TodoListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.constants.padding.sm}
    ${(props) => props.theme.constants.padding.lg};
`;

export const TodoListItemCheckbox = styled.input.attrs({
  type: 'checkbox',
})``;

export const TodoListItemInput = styled.input.attrs({
  type: 'text',
})`
  all: unset;
  text-overflow: ellipsis;
`;
