const generateId = require("./idGenerator");

function addContact(contacts, name, phone, email) {
  const newContact = {
    id: parseInt(generateId()),
    name: name,
    phone: phone,
    email: email,
  };

  contacts.push(newContact);
  console.log("Contato adicionado com sucesso!");
}

module.exports = addContact;
