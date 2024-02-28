import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from './RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const registerSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too Short!').required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      <Form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage className={css.error} name="password" component="span" />
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
