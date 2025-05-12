const prompt = require("prompt-sync")();

const text = prompt("Digite o texto que deve ser invertido: ");

function reverseString(text) {
  let reverseText = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reverseText += text[i];
  }

  return reverseText;
}

console.log(reverseString(text));
