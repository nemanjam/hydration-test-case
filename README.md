## Reproduce suspense hydration error

- useMe is dependant query `enabled: status !== 'loading'` with additional async `useSession()` call
- usePosts has no dependant async queries so SSR === CSR, ulness refetch/invalidate

- **main point:**

```ts
// if keys don't match:
// ['posts'] and ['posts-different']

// browser error:
Uncaught Error: This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition.

// but ALSO causes this Node.js error
Global Query error handler.  Message: connect ECONNREFUSED 127.0.0.1:80 Error object: AxiosError: connect ECONNREFUSED 127.0.0.1:80
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1161:16) {
  port: 80,
  address: '127.0.0.1',
  syscall: 'connect',
  code: 'ECONNREFUSED',
  errno: -111,
...
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': 'axios/0.27.2'
    },
    method: 'get',
    url: 'api/posts/',
    data: undefined
```

```ts
// 1.
// my-react-query/posts/usePosts.ts
export const usePosts = () => {
  // IMPORTANT: must match exactly getServerSideProps
  // await queryClient.prefetchQuery(['posts'], () => posts);
  const query = useQuery<Post[], AxiosError>(['posts'], () => getPosts());
  return query;
};

// 2.
// pages/index.tsx
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const me = getMe(true);
  const posts = getPosts(numberOfPosts, true);

  const queryClient = new QueryClient();
  // IMPORTANT: must match exactly useQuery key on client
  await queryClient.prefetchQuery(['posts'], () => posts);
  await queryClient.prefetchQuery(['me', me.id], () => me);

  // ...
};
```
