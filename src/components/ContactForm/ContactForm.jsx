import { nanoid } from "nanoid";
import { Field, Form, Formik } from "formik";

const ContactForm = ({ addContact }) => {
  const handleFormSubmit = (values, actions) => {
    values.id = nanoid(5);
    addContact(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", phone: "" }} onSubmit={handleFormSubmit}>
      <Form>
        <label htmlFor="name">
          <Field type="text" name="name" />
          Name
        </label>
        <label htmlFor="phone">
          <Field type="tel" name="phone" />
          Phone
        </label>
        <button type="submit">Add contact</button>
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
