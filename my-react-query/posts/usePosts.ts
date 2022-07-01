import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Post } from 'types';
import axiosInstance from 'my-react-query/axios';

const getPosts = async () => {
  const { data } = await axiosInstance.get<Post[]>('api/posts/');
  return data;
};

export const usePosts = () => {
  // IMPORTANT: must match exactly getServerSideProps
  // await queryClient.prefetchQuery(['posts'], () => posts);
  const query = useQuery<Post[], AxiosError>(['posts'], () => getPosts());

  return query;
};
