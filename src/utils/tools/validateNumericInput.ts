export function validateInput(el: HTMLInputElement) {
  el.addEventListener('beforeinput', function (e) {
    // Only allow numeric input
    if (e.inputType === 'insertText' || e.inputType === 'insertFromPaste') {
      const input = e.data;

      // Check if the input is not a number
      if (input !== null && !/^\d*$/.test(input)) {
        e.preventDefault();
      }
    }
  });

  // Additional prevention of non-numeric characters
  el.addEventListener('input', function () {
    // Remove any non-numeric characters
    this.value = this.value.replace(/[^\d]/g, '');
  });
}
