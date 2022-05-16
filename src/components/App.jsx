import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h1>Contacts</h1>
      <Filter value={filter} />
      <ContactList contacts={filtered} />
    </>
  );
}
