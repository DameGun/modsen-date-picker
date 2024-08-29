import { ChangeEvent, FocusEvent, MouseEvent, useContext, useRef } from 'react';
import { calendarIcon, clearIcon } from '@/assets/icons';
import { IconButton } from '@/components';
import { DatePickerContext } from '@/services/context/datePickerContext';
import type { InputProps } from '@/types/input';
import { InputWrapper, StyledInput } from './styled';

export default function Input({ placeholderMask, onFocus, onInputChange }: InputProps) {
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
    onInputChange('');
    setCurrentDate(new Date());
    e.stopPropagation();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onInputChange(e.target.value);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    e.preventDefault();
  }

  return (
    <InputWrapper onClick={setInputFocus}>
      <IconButton icon={calendarIcon} />
      <StyledInput
        placeholder={placeholderMask}
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
