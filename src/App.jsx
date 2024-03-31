import { useEffect, useState } from 'react';
import css from './index.module.css';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx'; 
import SearchBox from './components/SearchBox/SearchBox.jsx';

export default function App() {

  
 const [contacts, setContacts] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts ?? [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ];
  });
  
  const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

 const handleAddContact = (newContact) => {
  const contactWithId = { ...newContact, id: nanoid() };
   setContacts([...contacts, contactWithId]);
  };

  const handleDeleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

 
  return (
    <div className={css['cont-main']}>
      <div>
      <h1 className={css.titletxt}>Phonebook</h1>
        <ContactForm onSubmit={handleAddContact} />
      </div>
      <div>
      <SearchBox value={searchQuery} onChange={handleSearchChange} />
        <ContactList contacts={contacts} filter={searchQuery} onDeleteContact={handleDeleteContact} />
        </div>
    </div>
  );
}
