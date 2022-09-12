import { SendFormErrors, SendFormValues } from './types';

export const validateForm = ({
  name,
  email,
  message,
}: Partial<SendFormValues>): SendFormErrors => {
  const errors: SendFormErrors = {};
  if (!name) errors.name = 'Name is a required field';
  if (!email?.includes('@')) {
    errors.email = 'Email must be a valid e-mail address';
  }
  if (!message) errors.message = 'Message is a required field';
  return errors;
};
