import { FaUser, FaPhoneAlt, FaTrash } from "react-icons/fa";
import css from '../ContactList/ContactList.module.css'

const Contact = ({ contact:{name, number, id}, onDeleteContact }) => {
  return (
    <li className={css['list-item']}>
      <div>
      <p><FaUser /> {name}</p>
        <p><FaPhoneAlt /> {number}</p>
        </div>
      <button onClick={() => onDeleteContact(id)} className={css['btn-delete']}>
        <FaTrash size={14} />
      </button>
    </li>
  );
};

export default Contact;

