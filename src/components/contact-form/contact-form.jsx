import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact-form.module.scss';
import { TextInput } from '../ui/text-input';
import { TextArea } from '../ui/text-area';
import { Button } from '../ui/button/button';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import emailjsConfig from '../../shared/constants/emailjs-config';
import CustomValidationMessages from '../../shared/constants/custom-validation-messages';
import { validEmailRegexp } from '../../shared/constants/regexps';

export const ContactForm = () => {
  const [submitButtonLabel, setSubmitButtonLabel] = useState('Send message');
  const form = useRef();

  const {
    values,
    errors,
    isValid,
    handleChange,
    submitStatus,
    resetForm,
  } = useFormWithValidation(
    { name: '', email: '', message: '' },
    CustomValidationMessages.SUBMIT_SUCCESS,
  );

  const handleFormSubmit = evt => {
    evt.preventDefault();
    setSubmitButtonLabel('Sending...');

    emailjs
      .sendForm(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.TEMPLATE_ID,
        form.current,
        emailjsConfig.PUBLIC_KEY,
      )
      .then(res => {
        resetForm();
      }, (error) => {
        // eslint-disable-next-line no-console
        console.log(error.text);
      })
      .finally(() => {
        setSubmitButtonLabel('Send message');
      });
  };

  return (
    <form
      className={styles.root}
      onSubmit={handleFormSubmit}
      ref={form}
      noValidate
    >
      <TextInput
        name="name"
        value={values.name}
        placeholder="Your name"
        error={errors.name}
        errorMessage={CustomValidationMessages.NAME_ERROR}
        onChange={handleChange}
        minLength={2}
        maxLength={50}
        required
      />
      <TextInput
        name="email"
        value={values.email}
        placeholder="Your email"
        error={errors.email}
        errorMessage={CustomValidationMessages.EMAIL_ERROR}
        onChange={handleChange}
        pattern={validEmailRegexp}
        required
      />
      <TextArea
        name="message"
        value={values.message}
        placeholder="Your message"
        error={errors.message}
        errorMessage={CustomValidationMessages.MESSAGE_ERROR}
        onChange={handleChange}
        minLength={2}
        maxLength={1000}
        rows={6}
        required
      />
      <div className={styles.submitGroup}>
        {/* TODO: notify user of error */}
        <p className={styles.submitGroupMessage}>{submitStatus}</p>
        <Button
          type={'submit'}
          label={submitButtonLabel}
          disabled={!isValid}
        />
      </div>
    </form>
  );
};
