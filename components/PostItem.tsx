import React, { FC, useContext } from 'react';
import { MeContext } from 'providers/Me';
import { Post } from 'types';

type Props = {
  post: Post;
};

const PostItem: FC<Props> = ({ post }) => {
  const { me } = useContext(MeContext);

  return (
    <article className="p-4 my-1 border border-gray-300">
      <div className="mr-2 mb-2">User: {me?.name}</div>
      <div className="">Post: {post.content}</div>
    </article>
  );
};

export default PostItem;
