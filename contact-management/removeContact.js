function removeContact(contacts, id) {
  const index = contacts.findIndex((contact) => contact.id === id);

  if (index !== -1) {
    contacts.splice(index, 1);
  } else {
    console.log(
      "O contato informado não está presente na lista de contatos para removê-lo!"
    );
  }
}

module.exports = removeContact;
