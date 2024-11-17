const fs = require('fs');
const path = require('path');
console.log(__dirname);
const contactsPath = path.join(__dirname,'db', 'contacts.json');

console.log(`Contacts file path: ${contactsPath}`);

function listContacts() {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Eroare la citirea fișierului:', err);
        return;
      }
      const contacts = JSON.parse(data);
      console.log(contacts); // Afișează contactele în consolă
    });
}

function getContactById(contactId) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Eroare la citirea fișierului:', err);
        return;
      }
      const contacts = JSON.parse(data);
      const contact = contacts.find(contact => contact.id === contactId);
      
      if (contact) {
        console.log(contact); // Afișează contactul găsit
      } else {
        console.log('Contactul nu a fost găsit');
      }
    });
}
  
function removeContact(contactId) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Eroare la citirea fișierului:', err);
        return;
      }
      const contacts = JSON.parse(data);
      const updatedContacts = contacts.filter(contact => contact.id !== contactId);
  
      if (updatedContacts.length === contacts.length) {
        console.log('Contactul nu a fost găsit');
      } else {
        fs.writeFile(contactsPath, JSON.stringify(updatedContacts, null, 2), 'utf8', (err) => {
          if (err) {
            console.error('Eroare la scrierea în fișier:', err);
          } else {
            console.log('Contactul a fost șters cu succes');
          }
        });
      }
    });
}
  
function addContact(newContact) {
    fs.readFile(contactsPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Eroare la citirea fișierului:', err);
        return;
      }
      const contacts = JSON.parse(data);
      
      // Verifică dacă contactul cu același ID există deja
      const contactExists = contacts.some(contact => contact.id === newContact.id);
      if (contactExists) {
        console.log('Contactul cu acest ID există deja');
        return;
      }

      contacts.push(newContact);

      fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), 'utf8', (err) => {
        if (err) {
          console.error('Eroare la scrierea în fișier:', err);
        } else {
          console.log('Contactul a fost adăugat cu succes');
        }
      });
    });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
  