function listContact(contacts) {
  if (contacts.length === 0) {
    console.log(
      "Não é possível listar os contatos, pois a lista de contatos está vazia!"
    );
    return;
  }

  contacts.forEach((contact) => {
    console.log(
      `ID: ${contact.id}, Nome: ${contact.name}, Telefone: ${contact.phone}, Email: ${contact.email}`
    );
  });
}

module.exports = listContact;
