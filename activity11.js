const prompt = require("prompt-sync")();

const caesarCipher = require("./activity10");

const inputText = prompt("Informe o texto que deseja cifrar: ");
const inputShiftNumber = parseInt(prompt("Informe o valor do shift: "));

function encryptSentenceWithCaesarCipher(text, shift) {
  let completeText = text
    .split(" ")
    .map((word) => caesarCipher(word, shift))
    .join(" ");

  return completeText;
}

console.log(encryptSentenceWithCaesarCipher(inputText, inputShiftNumber));
