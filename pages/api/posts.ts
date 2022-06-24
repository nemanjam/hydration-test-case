// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Post } from 'types';
import { getRandomInteger, sleep } from 'utils';
import { delays, numberOfPosts } from 'my-constants';

export const getPosts = (n: number, isSsr = false) => {
  const getContent = (index: number) => (!isSsr ? `This is post number ${index}` : 'SSR');

  return Array.from(Array(n).keys()).map((index) => ({
    id: index,
    content: `${getContent(index)}, random num: ${getRandomInteger(1, 10)}`,
  }));
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  const posts = getPosts(numberOfPosts);
  await sleep(delays.posts);

  res.status(200).json(posts);
}
