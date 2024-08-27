import { MouseEvent } from 'react';
import { Button } from '@/components';
import StyledImage from './styled';

interface IconButtonProps {
  icon: string;
  onClick?(e: MouseEvent<HTMLImageElement>): void;
  isDisabled?: boolean;
  isUnavaliable?: boolean;
}

export default function IconButton({ icon, onClick, isDisabled, isUnavaliable }: IconButtonProps) {
  return (
    <Button $isDisabled={isDisabled} $isUnavaliable={isUnavaliable}>
      <StyledImage src={icon} onClick={onClick} $isDisabled={isDisabled} />
    </Button>
  );
}
