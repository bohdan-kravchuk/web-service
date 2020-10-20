import React from 'react';
import { useField } from 'formik';
import { InputGroup, FormControl } from 'react-bootstrap';
import styles from './styles.module.sass';

const InputField = props => {
  const [field, meta] = useField(props);
  const { label } = props;

  return (
    <div className={styles.InputField}>
      <div className={styles.labelRow}>
        <label className={styles.inputLabel} htmlFor={label}>{label}</label>
      </div>

      <InputGroup className={styles.inputGroup}>
        <FormControl id={label} aria-label={label} {...field} {...props} className={styles.input} />
      </InputGroup>

      {meta.touched && meta.error && (
        <div className={`text-danger ${styles.error}`}>{meta.error}</div>
      )}
    </div>
  );
};

export default InputField;
