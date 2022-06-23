import React, { FC, useContext } from 'react';
import { usePosts } from 'my-react-query/posts/usePosts';
import { MeContext } from 'providers/Me';


const Home: FC = () => {

  const { me } = useContext(MeContext);
  const { data } = usePosts();

  if (!data) return null;

  return (
    <div className="mx-auto border border-gray-300 w-full sm:max-w-md md:max-w-xl p-4">
      <h1 className="mb-4">Home</h1>
      
      <h3 className="mb-4">{`User: ${me?.name}`}</h3>

      <section className="">
        {data.length > 0 ? (
          data.map((post) => 
          <div 
            className="p-4 my-1 border border-gray-300"
            key={post.id}
          >
            {post.content}
          </div>)
        ) : (
          <div>No items.</div>
        )}
      </section>
    </div>
  );
};

export default Home;
