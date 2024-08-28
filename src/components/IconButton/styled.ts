import styled from 'styled-components';

const StyledImage = styled.img<{ $isDisabled?: boolean }>`
  display: flex;
  height: ${(props) => props.theme.constants.size.sm};
  width: ${(props) => props.theme.constants.size.sm};
  visibility: ${(props) => props.$isDisabled && 'hidden'};
  filter: opacity(${(props) => props.theme.constants.opacity.md})
    drop-shadow(0 0 0 ${(props) => props.theme.colors.black});
`;

export default StyledImage;
