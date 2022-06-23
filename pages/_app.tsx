import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import SuspenseWrapper from 'providers/SuspenseWrapper';
import getQueryClientConfig from 'my-react-query/queryClientConfig';

function MyApp({ 
  Component, 
  pageProps: { session, dehydratedState, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient(getQueryClientConfig()));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <SuspenseWrapper suspenseName="root">
          <Component {...pageProps} />
        </SuspenseWrapper>
      <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp
