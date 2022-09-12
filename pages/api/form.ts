import { NextApiRequest, NextApiResponse } from 'next';
import { sendForm } from '../../services/send-form';

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> => {
  if (request.body) return response.status(200).json(await sendForm(request));
  response.status(404).end();
};

export default handler;
