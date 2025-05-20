const prompt = require("prompt-sync")();

const number = prompt("Digite o número que deseja saber se é primo: ");

function isPrime(number) {
  const inputNumber = parseInt(number);

  if (isNaN(inputNumber) || inputNumber <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(inputNumber); i++) {
    if (inputNumber % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(number));
