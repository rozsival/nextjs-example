import { FORM_STATUS_ERROR, FORM_STATUS_SENT } from './constants';

export type BlogData = {
  article: string;
  title: string;
  publishedAt: string;
  text: string;
};

export type SendFormValues = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export type SendFormErrors = Partial<Record<keyof SendFormValues, string>>;

export type SendFormStatus = typeof FORM_STATUS_ERROR | typeof FORM_STATUS_SENT;

export type SendFormResponse = {
  errors?: SendFormErrors;
  status: SendFormStatus;
};
