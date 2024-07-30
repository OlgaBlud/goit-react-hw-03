import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} name={name} phone={number} />;
      })}
    </ul>
  );
};

export default ContactList;
