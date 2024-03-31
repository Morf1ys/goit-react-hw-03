import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Yup.object({
        name: Yup.string().min(3).max(50).required('Please enter your name'),
        number: Yup.string()
          .matches(/^[0-9-]+$/, 'Must be only digits')
          .min(7, 'Must be at least 7 characters')
          .required('Number is required'),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name:</label>
        <Field type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number:</label>
        <Field name="number">
          {({ field }) => (
            <InputMask
              {...field}
              mask="999-99-99"
              placeholder="123-45-67"
            />
          )}
        </Field>
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
