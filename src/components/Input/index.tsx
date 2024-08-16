import { MouseEvent, useRef, useState } from 'react';
import { InputWrapper, StyledInput } from './styled';

import { calendarIcon, clearIcon } from '@/assets/icons';
import { IconButton } from '@/components';

export default function Input() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [test, setTest] = useState<string>('');

  function setInputFocus() {
    const input = inputRef.current;
    if (input) {
      input.focus();
    }
  }

  function handleClear(e: MouseEvent<HTMLImageElement>) {
    setTest('');
    e.stopPropagation();
  }

  return (
    <InputWrapper onClick={setInputFocus}>
      <IconButton icon={calendarIcon} />
      <StyledInput
        placeholder='Choose Date'
        type='text'
        ref={inputRef}
        value={test}
        onChange={(e) => setTest(e.target.value)}
      />
      <IconButton icon={clearIcon} onClick={handleClear} />
    </InputWrapper>
  );
}
