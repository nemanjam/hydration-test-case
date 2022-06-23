// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from 'types';
import { sleep } from 'utils';

export const getMe = () => {
  return { name: 'John Doe', id: 1 };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const me = getMe();
  await sleep(2);
  
  res.status(200).json(me)
}
