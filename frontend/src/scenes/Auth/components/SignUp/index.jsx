import React from 'react';
import styles from './styles.module.sass';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { signUpValSchema } from 'common/models/formik/validationSchema';
import InputField from 'components/InputField';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp = ({ addNewUser }) => {
  const onSubmit = values => {
    const { email, password, fullName } = values;
    const user = { email, password, fullName };

    addNewUser(user);
  };

  return (
    <div className={styles.SignUp}>
      <h1 className={styles.title}>Sign up</h1>

      <Formik initialValues={initialValues} validationSchema={signUpValSchema} onSubmit={onSubmit} >
        <Form>
          <InputField label="Full Name" name="fullName" type="text" placeholder="John Snow" />

          <InputField label="Email" name="email" type="email" placeholder="example@gmail.com" />

          <InputField label="Password" name="password" type="password" placeholder="••••••••" />

          <InputField label="Confirm Password" name="confirmPassword" type="password" placeholder="••••••••" />

          <Button type="submit" variant="primary" className={styles.signUpBtn}>Sign Up</Button>

          <Link to='/auth/signin' className={styles.signUpLink}>Already Signed up?</Link>
        </Form>
      </Formik>
    </div>
  );
};



export default SignUp;
