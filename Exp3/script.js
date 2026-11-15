const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = null;

// Attach event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.number !== undefined) {
      appendNumber(button.dataset.number);
    } else if (button.dataset.operator !== undefined) {
      chooseOperator(button.dataset.operator);
    } else if (button.dataset.action === 'equals') {
      calculate();
    } else if (button.dataset.action === 'clear') {
      clearDisplay();
    } else if (button.dataset.action === 'delete') {
      deleteLast();
    }
  });
});

function appendNumber(number) {
  // Prevent multiple decimal points
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  updateDisplay();
}

function chooseOperator(selectedOperator) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operator = selectedOperator;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.value = currentInput;
}