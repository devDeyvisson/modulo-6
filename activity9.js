const prompt = require("prompt-sync")();

const inputSentense = prompt("Informe o texto que deseja que seja invertido: ");

function reverseWordsInSentence(sentense) {
  let invertSentence = sentense
    .split(" ")
    .map((word) => reverseString(word))
    .join(" ");
  return invertSentence;
}

function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

console.log(reverseWordsInSentence(inputSentense));
