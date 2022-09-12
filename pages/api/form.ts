import { NextApiRequest, NextApiResponse } from 'next';
import { sendForm } from '../../services/send-form';
import { SendFormResponse } from '../../services/types';

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<SendFormResponse>,
): Promise<void> => {
  if (request.body) return response.status(200).json(await sendForm(request));
  response.status(404).end();
};

export default handler;
