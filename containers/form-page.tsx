import { NextPage } from 'next';
import { FormEventHandler, useRef } from 'react';
import { Layout } from '../components';
import { useFetch } from '../hooks';
import { FORM_STATUS_ERROR, FORM_STATUS_SENT } from '../services/constants';
import { SendFormResponse, SendFormValues } from '../services/types';
import styles from './form-page.module.css';

export const FormPage: NextPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [{ loading }, post] = useFetch<SendFormValues, SendFormResponse>({
    method: 'POST',
    onError: (error) => alert(`❌ ${error}`),
    onSuccess: (response) => {
      if (response.status === FORM_STATUS_SENT) {
        formRef.current?.reset();
        alert('✅ Your message has been sent successfully.');
      }
      if (response.status === FORM_STATUS_ERROR) {
        alert(`❌\n${JSON.stringify(response.errors, null, 2)}`);
      }
    },
    url: '/api/form',
  });
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = Object.fromEntries(data) as SendFormValues;
    post(payload).catch(console.error);
  };
  return (
    <Layout>
      <h1>Form</h1>
      <p>Server-less API function example</p>
      <form
        ref={formRef}
        className={styles.form}
        name="form"
        onSubmit={onSubmit}
      >
        <div className={styles.input}>
          <label htmlFor="name">Name:&nbsp;</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="email">Email:&nbsp;</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className={styles.input}>
          <label htmlFor="subject">Subject:&nbsp;</label>
          <input id="subject" name="subject" type="text" />
        </div>
        <div className={styles.input}>
          <label htmlFor="message">Message:&nbsp;</label>
          <textarea id="message" name="message" required />
        </div>
        <div className={styles.input}>
          <button disabled={loading} type="submit" name="submit">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};
