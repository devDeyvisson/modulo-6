const prompt = require("prompt-sync")();

const numbers = prompt("Digite os números separados por vírgula: ");

function sumOfUniqueEvenNumbers(numbers) {
  let listNumbers = numbers
    .split(",")
    .map((num) => parseInt(num.trim()))
    .filter((num) => !isNaN(num));

  let uniqueNumbers = listNumbers.filter(
    (item, index) => listNumbers.indexOf(item) === index
  );

  let evenNumbers = uniqueNumbers.filter((num) => num % 2 === 0);

  let sum = evenNumbers.reduce((total, num) => total + num, 0);

  return sum;
}

console.log(
  "A soma dos números únicos e pares do lista é: " +
    sumOfUniqueEvenNumbers(numbers)
);
