const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

// Exemple de utilizare a funcțiilor

// 1. Listează contactele
listContacts();

// 2. Obține un contact după ID
getContactById('1');

// 3. Șterge un contact după ID
removeContact('1');

// 4. Adaugă un contact
addContact({
  id: '3',
  name: 'Ion Popescu',
  phone: '123456789',
  email: 'ion.popescu@example.com'
});
