function checkMonthInputValue(value: string) {
  let input = value;

  if (+input[0] > 1) input = input.slice(0, 0);
  if (+input[0] === 1 && +input[1] > 2) input = input.slice(0, 1);

  return input;
}

function checkDayInputValue(value: string) {
  let input = value;

  if (+input[2] > 3) input = input.slice(0, 2);
  if (+input[2] === 3 && +input[3] > 1) input = input.slice(0, 3);

  return input;
}

export function checkDatePickerInput(value: string) {
  let formattedInput = value;

  let input = formattedInput.replace(/\D/g, '');

  if (input.length > 8) input = input.slice(0, 8);

  input = checkMonthInputValue(input);
  input = checkDayInputValue(input);

  formattedInput = input;

  if (input.length > 2 && input.length <= 4) {
    formattedInput = `${input.slice(0, 2)}/${input.slice(2)}`;
  } else if (input.length > 4) {
    formattedInput = `${input.slice(0, 2)}/${input.slice(2, 4)}/${input.slice(4)}`;
  }

  return formattedInput;
}

export function checkMonthPickerInput(value: string) {
  let formattedInput = value;

  let input = value.replace(/\D/g, '');

  if (input.length > 6) input = input.slice(0, 6);

  input = checkMonthInputValue(input);

  formattedInput = input;

  if (input.length > 2 && input.length <= 6) {
    formattedInput = `${input.slice(0, 2)}/${input.slice(2)}`;
  }

  return formattedInput;
}

export function checkYearPickerInput(value: string) {
  let input = value.replace(/\D/g, '');

  if (input.length > 4) input = input.slice(0, 4);

  return input;
}
