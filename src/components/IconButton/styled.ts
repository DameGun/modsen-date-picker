import styled from 'styled-components';

const StyledImage = styled.img<{ $isDisabled?: boolean }>`
  height: ${(props) => props.theme.constants.size.sm};
  width: ${(props) => props.theme.constants.size.sm};

  visibility: ${(props) => props.$isDisabled && 'hidden'};
`;

export default StyledImage;
