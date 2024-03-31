
import Contact from './Contact.jsx';
import css from './ContactList.module.css'
const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css['list-cont']}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
