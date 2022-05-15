import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { saveContact, filterContacts, deleteContact } from '../redux/store';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`Contact ${newContact.name} already exists`);
    }
    dispatch(saveContact(newContact));
  };

  const deletingContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilterValue = e => dispatch(filterContacts(e.target.value));

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h1>Contacts</h1>
      <Filter value={filter} changeFilter={getFilterValue} />
      <ContactList contacts={filtered} onDeleteContact={deletingContact} />
    </>
  );
}
