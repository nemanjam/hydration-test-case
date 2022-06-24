import React, { FC, useContext } from 'react';
import { usePosts } from 'my-react-query/posts/usePosts';
import { MeContext } from 'providers/Me';
import PostItem from 'components/PostItem';

const Home: FC = () => {
  const { me } = useContext(MeContext);
  const { data } = usePosts();

  if (!data) return null;

  return (
    <div className="sm:border-x border-gray-300 p-4 flex-grow">
      <h1 className="mb-4">Home</h1>
      <h3 className="mb-4">{`User: ${me?.name}`}</h3>

      <section className="">
        {data.length > 0 ? (
          data.map((post) => <PostItem key={post.id} post={post} />)
        ) : (
          <div>No items.</div>
        )}
      </section>
    </div>
  );
};

export default Home;
