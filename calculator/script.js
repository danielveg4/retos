const resultElement = document.getElementById('result');
const numbersElement = document.getElementById('numbers');
const sumElement = document.getElementById('sum');
const restaElement = document.getElementById('resta');
const multiplicationElement = document.getElementById('mult');
const divisionElement = document.getElementById('div');
const resetElement = document.getElementById('reset');
const equalElement = document.getElementById('equal');
const calcElement = document.getElementById('calc');

let result = 0;

let firstNumber = null; 
let secondNumber = null; 
let operation = null;

const operaciones = {
    sum: (a, b) => a + b,    
    resta: (a, b) => a - b,   
    mult: (a, b) => a * b,    
    div: (a, b) => a / b  
}

const printNumbersCalc = () => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
        const newNumberTecla = document.createElement('button');
        newNumberTecla.textContent = i;
        newNumberTecla.value = `${i}`;
        newNumberTecla.addEventListener('click', () => selectNumber(i));
        fragment.append(newNumberTecla);

    }
    numbersElement.append(fragment)
}

const selectNumber = (num) => {
    if (firstNumber === null) {
        firstNumber = num; 
        console.log(`primer número: ${firstNumber}`);
    } else if (secondNumber === null) {
        secondNumber = num; 
        console.log(`segundo número: ${secondNumber}`);
    }
};

const printResult = (result) => {
    resultElement.textContent = result; 
    console.log(`resultado de la suma: ${result}`);
};

sumElement.addEventListener('click', () => {
    operation = 'sum';
    console.log(`operación: ${operation}`);
});

equalElement.addEventListener('click', () => {
    if (firstNumber !== null && secondNumber !== null && operation === 'sum') {
        const sumResult = operaciones.sum(firstNumber, secondNumber);
        printResult(sumResult);
        resetCalculator(); 
    } else {
        console.log("selecciona dos números y una operación");
    }
});

const resetCalculator = () => {
    firstNumber = null; 
    secondNumber = null; 
    operation = null; 
};


printNumbersCalc();