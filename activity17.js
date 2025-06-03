const prompt = require("prompt-sync")();

let inputNumber = prompt(
  "Informe a quantidade de números pares para o triângulo: "
);

function drawEvenNumberTriangle(number) {
  let convertNumber = parseInt(number);

  if (isNaN(convertNumber) || convertNumber <= 0) {
    console.log("Só deve ser inserido números inteiros positivos!");
    return;
  }

  let evenNumbers = getEvenNumbers(convertNumber);
  let index = 0;
  let row = 1;

  while (index < evenNumbers.length) {
    let lineNumbers = evenNumbers.slice(index, index + row);

    console.log(lineNumbers.join(" "));

    index = index + row;
    row++;
  }
}

function getEvenNumbers(number) {
  let evens = [];
  let num = 0;

  while (evens.length < number) {
    if (num % 2 === 0) {
      evens.push(num);
    }
    num++;
  }

  return evens;
}

drawEvenNumberTriangle(inputNumber);
