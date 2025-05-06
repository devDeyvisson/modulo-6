const prompt = require('prompt-sync')();
const addition = require('./operations/addition');
const substraction = require('./operations/substraction');
const multiplication = require('./operations/multiplication');
const division = require('./operations/division');
const percentage = require('./operations/percentage');

function getMenu() {
    console.log("---> MENU CALCULADORA <---");
    console.log("Digite [ + ] para Adição");
    console.log("Digite [ - ] para Subtração");
    console.log("Digite [ * ] para Multiplicação");
    console.log("Digite [ / ] para Divisão");
    console.log("Digite [ % ] para Porcentagem");
}

function searchOption() {
    
    let firstNumber = parseFloat(readInput("Digite o primeiro número: "));
    getMenu();
    let operation = readInput("Qual operação deseja realizar: ");
    let secondNumber = parseFloat(readInput("Digite o segundo número: "));
    let result = 0;

    validateNumbers(firstNumber, secondNumber);

    switch(operation) {
        case "+":
            result = addition(firstNumber, secondNumber);
            break;
        case "-":
            result = substraction(firstNumber, secondNumber)
            break;
        case "*":
            result = multiplication(firstNumber, secondNumber)
            break;
        case "/":
            result = division(firstNumber, secondNumber);
            break;
        case "%":
            result = percentage(firstNumber, secondNumber);
            break;
        default:
            throw new Error("A operação é inválida! Deve-se digitar (+, -, *, / ou %)")
    }

    if (operation === "%") {
        console.log(`Resultado: ${secondNumber} é ${result.toFixed(2)}% de ${firstNumber}`);
    } else {
        console.log(`Resultado: ${firstNumber} ${operation} ${secondNumber} = ${result}`);
    }
}

function validateNumbers(num1, num2) {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("Só é possível realizar operações com números!")
    }
}

function readInput(message) {
    return prompt(message);
}

searchOption()