import { FaUser, FaPhoneAlt, FaTrash } from "react-icons/fa";


const Contact = ({ contact:{name, number, id}, onDeleteContact }) => {
  return (
    <li>
      <p><FaUser /> {name}</p>
      <p><FaPhoneAlt /> {number}</p>
      <button onClick={() => onDeleteContact(id)}>
        <FaTrash />
      </button>
    </li>
  );
};

export default Contact;

