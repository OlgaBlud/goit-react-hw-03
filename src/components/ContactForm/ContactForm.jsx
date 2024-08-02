import { nanoid } from "nanoid";
import { Field, Form, Formik, ErrorMessage } from "formik";

import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = { name: "", number: "" };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    number: Yup.number()
      .min(7, "Too Short!")
      .required("Required!")
      .typeError("Enter phone-number!"),
  });

  const handleFormSubmit = (values, actions) => {
    values.id = nanoid(5);
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrap}>
          <label className={css.inputLabel} htmlFor={nameFieldId}>
            Name
          </label>
          <div>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage
              className={css.inputErrorMsg}
              name="name"
              component="span"
            />
          </div>
        </div>
        <div className={css.inputWrap}>
          <label className={css.inputLabel} htmlFor={numberFieldId}>
            Phone
          </label>
          <div>
            <Field
              className={css.input}
              type="tel"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.inputErrorMsg}
              name="number"
              component="span"
            />
          </div>
        </div>
        <button className={css.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// /* // _________________________________________________variant without Formik */

// import { nanoid } from "nanoid";
// const ContactForm = ({ addContact }) => {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     addContact({
//       id: nanoid(5),
//       name: event.target.name.value,
//       number: event.target.phone.value,
//     });
//     event.target.reset();
//   };
//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="name">
//         <input type="text" name="name" />
//         Name
//       </label>
//       <label htmlFor="phone">
//         <input type="tel" name="phone" />
//         Phone
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// export default ContactForm;
