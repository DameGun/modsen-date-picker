import { MouseEvent } from 'react';
import { Button } from '@/components';
import StyledImage from './styled';

interface IconButtonProps {
  icon: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  isDisabled?: boolean;
  isUnavaliable?: boolean;
  testid?: string;
}

export default function IconButton({
  icon,
  onClick,
  isDisabled,
  isUnavaliable,
  testid,
}: IconButtonProps) {
  return (
    <Button
      $isDisabled={isDisabled}
      $isUnavaliable={isUnavaliable}
      onClick={onClick}
      data-testid={testid}
    >
      <StyledImage src={icon} $isDisabled={isDisabled} />
    </Button>
  );
}
