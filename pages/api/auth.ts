// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User } from 'types';
import { getRandomInteger, sleep } from 'utils';
import { delays } from 'my-constants';

export const getMe = (isSsr = false) => {
  const name = !isSsr ? 'John Doe' : 'SSR';
  return { name: `${name}, rand: ${getRandomInteger(10, 20)}`, id: 1 };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const me = getMe();
  await sleep(delays.me);
  
  res.status(200).json(me)
}
