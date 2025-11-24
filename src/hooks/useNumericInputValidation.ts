import { useEffect } from 'react';
import { validateInput } from '../utils/tools/validateNumericInput';

export default function useNumericInputValidation() {
  useEffect(() => {
    const numericInputs = document.querySelectorAll("[inputmode='numeric']");
    numericInputs.forEach(input => {
      if (input instanceof HTMLInputElement) validateInput(input);
    });
  }, []);
}
