const prompt = require("prompt-sync")();

const numbers = prompt("Digite os números separados por vírgula: ");

function getOddNumbers(numbers) {
  let listNumbers = numbers
    .split(",")
    .map((num) => parseInt(num.trim()))
    .filter((num) => !isNaN(num));

  return listNumbers.filter((num) => num % 2 === 0);
}

console.log("Número(os) par(es): " + getOddNumbers(numbers));
