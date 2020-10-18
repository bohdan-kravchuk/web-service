import React from 'react';
import styles from './styles.module.sass';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className={styles.SignUp}>
      <h1 className={styles.title}>Sign up</h1>

      <Form className={styles.form}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="user@gmail.com" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="••••••••" />
        </Form.Group>

        <Button variant="primary">Sign Up</Button>

        <div>
          <Link to='/auth/signin'> Already Signed up?</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
