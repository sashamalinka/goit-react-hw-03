import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contacts) => (
        <li key={contacts.id} className={css.item}>
          <Contact {...contacts} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
