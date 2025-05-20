const removeDuplicates = require("./activity12");
const countVowels = require("./activity13");

const prompt = require("prompt-sync")();

const inputText = prompt("Informe o texto: ");

function removeDuplicatesAndCountVowels(text) {
  let noDuplicates = removeDuplicates(text);
  let vowelCount = countVowels(noDuplicates);
  return vowelCount;
}

console.log(
  "Quantidade de vogais únicas: " + removeDuplicatesAndCountVowels(inputText)
);
