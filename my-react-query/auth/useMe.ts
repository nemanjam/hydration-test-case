import { useQuery } from 'react-query';
import { User } from 'types';
import axiosInstance from 'my-react-query/axios';
import { AxiosError } from 'axios';
import  useIsMounted  from 'hooks/useIsMounted';
import useSession from 'hooks/useSession';

const getUser = async (id: number | undefined) => {
  // if (!id) return null;

  const { data } = await axiosInstance.get<User>('api/auth/');
  return data;
};

export const useMe = () => {
  // const isMounted = useIsMounted();
  const { data: id, status } = useSession();
  // const id = 1;

  const query = useQuery<User | null, AxiosError>(['me', id], () => getUser(id),
    {
      enabled: status !== 'loading',
      onError: (error) => {
        console.error('me query error: ', error.response);
      },
    }
  );

  return query;
};
