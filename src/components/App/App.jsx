import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList';
import css from './App.module.css'
import { nanoid } from 'nanoid';

import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts !== null ? JSON.parse(savedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const newContact = {
      ...contact,
      id: nanoid()
    };
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(c => c.id !== id));
  };

  const filterContacts = filterText => {
    setFilter(filterText);
  }

  const filteredContacts = contacts.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox onFilter={filterContacts} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </>
  )
}

export default App
