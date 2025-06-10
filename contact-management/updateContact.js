function updateContact(contacts, id, name, phone, email) {
  const index = contacts.findIndex((contact) => contact.id === id);

  if (index !== -1) {
    contacts[index].name = name || contacts[index].name;
    contacts[index].phone = phone || contacts[index].phone;
    contacts[index].email = email || contacts[index].email;
    console.log("Contato atualizado com sucesso!");
  } else {
    console.log(
      "O contato informado não está presente na lista de contatos para atualizá-lo!"
    );
  }
}

module.exports = updateContact;
