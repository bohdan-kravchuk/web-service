import React from 'react';
import styles from './styles.module.sass';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className={styles.SignIn}>
      <h1 className={styles.title}>Welcome</h1>

      <div className={styles.subtitle}>
        <span>New Here? </span>
        <Link to='/auth/signup'>Create an account</Link>
      </div>

      <Form className={styles.form}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="user@gmail.com" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="••••••••" />
        </Form.Group>

        <Button variant="primary">
          Sign In
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
