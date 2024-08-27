import styled from 'styled-components';
import { customScrollbarStyles } from '@/styles/base';

export const TodoListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.constants.padding.sm}
    ${(props) => props.theme.constants.padding.lg};

  p {
    margin: 0;
  }
`;

export const TodoListWrapper = styled.div`
  position: absolute;
  border-radius: ${(props) => props.theme.constants.borderRadius};
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 20;
  padding: ${(props) => props.theme.constants.padding.md} 0;
  animation: show-todo-list ${(props) => props.theme.constants.transitionTime.md} ease;

  @keyframes show-todo-list {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const TodoListContainer = styled.ul`
  padding: 0;
  margin: 0;
  overflow: auto;
  max-height: 60%;
  scrollbar-gutter: stable;
  ${customScrollbarStyles};
`;
