function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
function calculateResult() {
  try {
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result;

    // Add glow animation
    display.classList.add('result-glow');
    setTimeout(() => display.classList.remove('result-glow'), 300);

  } catch {
    document.getElementById('display').value = 'Error';
  }
}
