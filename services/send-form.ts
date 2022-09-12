import { NextApiRequest } from 'next';
import { FORM_STATUS_ERROR, FORM_STATUS_SENT } from './constants';
import { SendFormResponse } from './types';
import { validateForm } from './validate-form';

export const sendForm = async (
  request: NextApiRequest,
): Promise<SendFormResponse> => {
  const errors = validateForm(request.body);
  if (Object.values(errors).length) {
    return { errors, status: FORM_STATUS_ERROR };
  }
  console.log('Sending form...\n', request.body);
  return { status: FORM_STATUS_SENT };
};
