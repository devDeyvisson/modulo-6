const prompt = require("prompt-sync")();

// const inputText = prompt("Informe o texto: ");

function countVowels(text) {
  const listVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (listVowels.includes(text[i])) {
      count++;
    }
  }

  return count;
}

// console.log(
//   "Quantidade de vogais presentes no texto digitado: " + countVowels(inputText)
// );

module.exports = countVowels;
