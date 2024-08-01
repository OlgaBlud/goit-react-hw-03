import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            phone={number}
            deleteContacts={deleteContacts}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
