// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Post } from 'types';
import { sleep } from 'utils'

export const getPosts = (n: number) => {
  return Array.from(Array(n).keys()).map((index) => ({
    id: index,
    content: `This is post number ${index}`,
  }));
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  const posts = getPosts(7);
  await sleep(4);
  
  res.status(200).json(posts)
}
