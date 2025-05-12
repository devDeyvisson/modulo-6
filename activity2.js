const prompt = require("prompt-sync")();

const names = prompt("Informe os nomes separados por vírgula: ");

function greetUsers(usersNames) {
  let listNames = usersNames
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name.length > 0);

  if (listNames.length > 0) {
    listNames.forEach((names) => {
      console.log(`Seja bem vindo(a) ${names}!`);
    });
  } else {
    console.log("Nenhum nome de usuário foi informado!");
  }
}

greetUsers(names);
