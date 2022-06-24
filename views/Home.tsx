import React, { FC, useContext } from 'react';
import { usePosts } from 'my-react-query/posts/usePosts';
import { MeContext } from 'providers/Me';
import PostItem from 'components/PostItem';
import { useQueryClient } from 'react-query';

const Home: FC = () => {
  const queryClient = useQueryClient();

  const { me } = useContext(MeContext);
  const { data } = usePosts();

  const handleClick = async () => {
    console.log('handleClick');
    // queryClient.invalidateQueries(['posts']);
    queryClient.invalidateQueries(['me', 1]);
    // await queryClient.refetchQueries(['me', 1], { exact: true });
  };

  if (!data) return null;

  return (
    <div className="sm:border-x border-gray-300 p-4 flex-grow">
      <h1 className="mb-4">Home</h1>
      <h3 className="mb-4">{`User: ${me?.name}`}</h3>

      <button
        onClick={handleClick}
        className="m-1 p-2 border-2 border-blue-400 bg-yellow-400"
      >
        Invalidate
      </button>

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
