import { ChangeEvent, FocusEvent, MouseEvent, useContext, useRef } from 'react';
import { calendarIcon, clearIcon } from '@/assets/icons';
import { IconButton } from '@/components';
import { ChangeActionType } from '@/constants/calendar';
import { PlaceholderMaskType } from '@/constants/input';
import { DatePickerContext } from '@/services/context/datePickerContext';
import type { InputProps } from '@/types/input';
import { InputWrapper, StyledInput } from './styled';

export default function Input({ type, onFocus, onChange }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputValue, setCurrentDate } = useContext(DatePickerContext);

  function setInputFocus() {
    const input = inputRef.current;

    if (input) {
      input.focus();
      onFocus();
    }
  }

  function handleClear(e: MouseEvent<HTMLImageElement>) {
    onChange('', ChangeActionType.Input);
    setCurrentDate(new Date());
    e.stopPropagation();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.value, ChangeActionType.Input);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    e.preventDefault();
  }

  return (
    <InputWrapper onClick={setInputFocus}>
      <IconButton icon={calendarIcon} />
      <StyledInput
        placeholder={PlaceholderMaskType[type]}
        type='text'
        ref={inputRef}
        value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <IconButton icon={clearIcon} onClick={handleClear} />
    </InputWrapper>
  );
}
