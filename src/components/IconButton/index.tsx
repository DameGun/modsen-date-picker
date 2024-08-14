import { MouseEvent } from 'react';
import StyledImage from './styled';

interface IconButtonProps {
  icon: string;
  onClick?(e: MouseEvent<HTMLImageElement>): void;
}

export default function IconButton({ icon, onClick }: IconButtonProps) {
  return <StyledImage src={icon} onClick={onClick} />;
}
