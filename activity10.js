const prompt = require("prompt-sync")();

// const inputText = prompt("Informe o texto que deseja cifrar: ");
// const inputShiftNumber = parseInt(prompt("Informe o valor do shift: "));

function caesarCipher(text, shift) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= "a" && char <= "z") {
      let code = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
      result += String.fromCharCode(code);
    } else if (char >= "A" && char <= "Z") {
      let code = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
      result += String.fromCharCode(code);
    } else {
      result += char;
    }
  }

  return result;
}

// console.log(caesarCipher(inputText, inputShiftNumber));

module.exports = caesarCipher;
