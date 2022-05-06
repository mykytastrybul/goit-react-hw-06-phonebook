import useLocalStorage from 'hooks/useLocalStorage';
import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList ';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContact] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`Contact ${newContact.name} already exists`);
    }
    const contact = {
      ...newContact,
    };
    setContact(prev => [...prev, contact]);
  };

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = contactId => {
    const newContacts = contacts.filter(contact => contact.id !== contactId);
    setContact(newContacts);
  };

  const getFilterValue = e => setFilter(e.target.value);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h1>Contacts</h1>
      <Filter value={filter} changeFilter={getFilterValue} />
      <ContactList contacts={filtered} onDeleteContact={deleteContact} />
    </>
  );
}
