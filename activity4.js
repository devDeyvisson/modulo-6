const prompt = require("prompt-sync")();

const inputValues = prompt("Informe os valores separados por vírgula: ");

function getUniqueValues(values) {
  let listValues = values.split(",").map((values) => values.trim());

  let uniqueValues = listValues.filter(
    (item, index) => listValues.indexOf(item) === index
  );

  return uniqueValues;
}

console.log(getUniqueValues(inputValues));
