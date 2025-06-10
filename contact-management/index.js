const prompt = require("prompt-sync")();
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const removeContact = require("./removeContact");
const listContact = require("./listContact");
const getMenu = require("./menu");

let listContacts = [];

function searchOptions() {
  getMenu();

  let option = prompt("O que deseja fazer? Informe a opção aqui: ");

  switch (option) {
    case "1":
      let name = prompt("Informe o nome do contato: ");
      let phone = prompt("Informe o número do contato: ");
      let email = prompt("Informe o email do contato: ");
      addContact(listContacts, name, phone, email);
      searchOptions();
      break;
    case "2":
      let id = parseInt(
        prompt("Informe o id do contato que deseja atualizar: ")
      );
      let newName = prompt("Informe o nome do contato: ");
      let newPhone = prompt("Informe o número do contato: ");
      let newEmail = prompt("Informe o email do contato: ");
      updateContact(listContacts, id, newName, newPhone, newEmail);
      searchOptions();
      break;
    case "3":
      let removeId = parseInt(
        prompt("Informe o id do contato que deseja remover: ")
      );
      removeContact(listContacts, removeId);
      searchOptions();
      break;
    case "4":
      listContact(listContacts);
      searchOptions();
      break;
    case "5":
      console.log("Saindo...");
      break;
    default:
      throw new Error(
        "Opção inválida! Só são aceitos os valores: 1, 2, 3, 4 e 5."
      );
  }
}

searchOptions();
