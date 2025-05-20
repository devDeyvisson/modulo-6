const prompt = require("prompt-sync")();

// const inputText = prompt("Informe o texto: ");

function removeDuplicates(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (!result.includes(text[i])) {
      result += text[i];
    }
  }

  return result;
}

// console.log(
//   "Lista de valores sem duplicatas: " + removeDuplicates(inputText)
// );

module.exports = removeDuplicates;
