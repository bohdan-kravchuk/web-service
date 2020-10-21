import React from 'react';
import styles from './styles.module.sass';
import { Formik, Form } from 'formik';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputField from 'components/InputField';
import { signInValSchema } from 'common/formik/validationSchema';

const initialValues = {
  email: '',
  password: ''
};

const SignIn = ({ signInUser }) => {
  const onSubmit = values => {
    signInUser(values);
  };

  return (
    <div className={styles.SignIn}>
      <h1 className={styles.title}>Welcome</h1>

      <div className={styles.subtitle}>
        <span>New Here? </span>
        <Link to='/auth/signup'>Create an account</Link>
      </div>

      <Formik initialValues={initialValues} validationSchema={signInValSchema} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <InputField label="Email" name="email" type="email" placeholder="example@gmail.com" />

          <InputField label="Password" name="password" type="password" placeholder="••••••••" />

          <Button type="submit" variant="primary" className={styles.signInBtn}>Sign In</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
