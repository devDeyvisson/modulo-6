const prompt = require("prompt-sync")();

let inputListNumbers = prompt("Informe os números separados por vírgula: ");

function sortUniqueNumbers(numbers) {
  let listNumbers = numbers
    .split(",")
    .map((num) => parseInt(num.trim()))
    .filter((num) => !isNaN(num));

  let uniqueNumbers = removeDuplicates(listNumbers);

  return uniqueNumbers.sort((num1, num2) => num1 - num2);
}

function removeDuplicates(listNumbers) {
  return listNumbers.filter(
    (number, index) => listNumbers.indexOf(number) === index
  );
}

console.log(
  "Lista de números únicos e ordenados: ",
  sortUniqueNumbers(inputListNumbers)
);
