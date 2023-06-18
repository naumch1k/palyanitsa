import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact-form.module.scss';
import { TextInput } from '../ui/text-input';
import { TextArea } from '../ui/text-area';
import { Button } from '../ui/button';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import {
  emailjsConfig,
  patterns,
  contactFormMessages
} from '../../utils/constants';

export const ContactForm = () => {
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
    contactFormMessages.SUBMIT_SUCCESS,
  );

  const handleFormSubmit = evt => {
    evt.preventDefault();

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
        errorMessage={contactFormMessages.NAME_ERROR}
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
        errorMessage={contactFormMessages.EMAIL_ERROR}
        onChange={handleChange}
        pattern={patterns.EMAIL}
        required
      />
      <TextArea
        name="message"
        value={values.message}
        placeholder="Your message"
        error={errors.message}
        errorMessage={contactFormMessages.MESSAGE_ERROR}
        onChange={handleChange}
        minLength={2}
        maxLength={1000}
        rows={7}
        required
      />
      <div className={styles.submitGroup}>
        {/* TODO: notify user of error */}
        <p className={styles.submitGroupMessage}>{submitStatus}</p>
        <Button
          type={'submit'}
          label={'Send message'}
          disabled={!isValid}
        />
      </div>
    </form>
  );
};
