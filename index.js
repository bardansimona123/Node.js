const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const { Command } = require('commander');

const program = new Command();

program
  .option('-a, --action <type>', 'alege acțiunea')
  .option('-i, --id <type>', 'id-ul utilizatorului')
  .option('-n, --name <type>', 'numele utilizatorului')
  .option('-e, --email <type>', 'email-ul utilizatorului')
  .option('-p, --phone <type>', 'telefonul utilizatorului');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      if (!id) {
        console.error('Te rog să furnizezi un ID pentru această acțiune.');
        break;
      }
      getContactById(id);
      break;

    case 'add':
      if (!name || !email || !phone) {
        console.error('Te rog să furnizezi numele, email-ul și telefonul pentru a adăuga un contact.');
        break;
      }
      addContact({ id: Date.now().toString(), name, email, phone });
      break;

    case 'remove':
      if (!id) {
        console.error('Te rog să furnizezi un ID pentru a șterge contactul.');
        break;
      }
      removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Tip de acțiune necunoscut!');
  }
}

invokeAction(argv);

