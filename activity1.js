const prompt = require("prompt-sync")();

let inputValues = prompt(
  "Digite os números que deseja inserir na lista separados por vírgula. (Exemplo: 11, 17, 9):"
);

let listNumbers = inputValues
  .split(",")
  .map((num) => parseFloat(num.trim()))
  .filter((num) => !isNaN(num));

function findMax(listNumbers) {
  let largestNumber = listNumbers[0];

  if (listNumbers.length === 0) {
    return "A lista está vazia!";
  }

  for (let i = 0; i < listNumbers.length; i++) {
    if (listNumbers[i] > largestNumber) {
      largestNumber = listNumbers[i];
    }
  }

  return `O maior número é o ${largestNumber}!`;
}

console.log(findMax(listNumbers));
