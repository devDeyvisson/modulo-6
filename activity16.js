const prompt = require("prompt-sync")();

let inputNumber = prompt("Informe a altura do triângulo: ");

function drawTriangle(number) {
  let height = parseInt(number);

  if (isNaN(height)) {
    console.log("O valor digitado não é um número!");
    return;
  }

  for (let i = 0; i <= height; i++) {
    console.log("*".repeat(i));
  }
}

drawTriangle(inputNumber);
