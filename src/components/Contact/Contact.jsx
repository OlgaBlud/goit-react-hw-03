import { BsTelephoneFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import css from "./Contact.module.css";

const Contact = ({ name, phone }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.textWrap}>
        <div className={css.dataWrap}>
          <IoIosContact className={css.icon} size="24" />
          <p className={css.contactName}>{name}</p>
        </div>
        <div className={css.dataWrap}>
          <BsTelephoneFill className={css.icon} size="20" />
          <p className={css.contactPhone}>{phone}</p>
        </div>
      </div>
      <button type="button" className={css.deleteContactBtn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
