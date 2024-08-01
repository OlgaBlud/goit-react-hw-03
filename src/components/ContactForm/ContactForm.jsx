import { nanoid } from "nanoid";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const initialValues = { name: "", number: "" };
  const addContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!"),
    //   .required("Required"),
    phone: Yup.string().min(3, "Too Short!").max(13, "Too Long!"),
    //   .required("Required"),
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
      <Form>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
        </label>
        <label htmlFor="phone">
          Phone
          <Field type="tel" name="number" />
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
