import styled from 'styled-components';

const StyledImage = styled.img`
  height: ${(props) => props.theme.constants.size.sm};
  width: ${(props) => props.theme.constants.size.sm};
  cursor: pointer;
`;

export default StyledImage;
