import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import PageLayout from 'layouts/PageLayout';
import HomeView from 'views/Home';
import { getPosts } from 'pages/api/posts';
import { getMe } from 'pages/api/auth';
import { numberOfPosts } from 'my-constants';

const Home: FC = () => {
  return (
    <>
      <PageLayout>
        <HomeView />
      </PageLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const me = getMe();
  const posts = getPosts(numberOfPosts);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['posts'], () => posts);
  await queryClient.prefetchQuery(['me'], () => me);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
