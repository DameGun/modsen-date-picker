import { MouseEvent } from 'react';
import { Button } from '@/components';
import StyledImage from './styled';

interface IconButtonProps {
  icon: string;
  onClick?(e: MouseEvent<HTMLImageElement>): void;
  isDisabled?: boolean;
}

export default function IconButton({ icon, onClick, isDisabled }: IconButtonProps) {
  return (
    <Button $isDisabled={isDisabled}>
      <StyledImage src={icon} onClick={onClick} $isDisabled={isDisabled} />
    </Button>
  );
}
