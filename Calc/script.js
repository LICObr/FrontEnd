let currentInput = '';

document.getElementById('display').addEventListener('input', function() {
    currentInput = this.value;
});

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = evaluateExpression(currentInput);
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function evaluateExpression(expression) {
    
    expression = expression.replace(/\s+/g, '');


    let numbers = expression.split(/[\+\-\*\/]/).map(num => parseFloat(num));
    let operators = expression.split(/[0-9.]+/).filter(op => op.length > 0);

    
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let number = numbers[i + 1];
        
        if (operator === '+') {
            result = add(result, number);
        } else if (operator === '-') {
            result = subtract(result, number);
        } else if (operator === '*') {
            result = multiply(result, number);
        } else if (operator === '/') {
            if (number !== 0) {
                result = divide(result, number);
            } else {
                throw new Error('Cannot divide by zero');
            }
        }
    }
    return result;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
