import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import getQueryClientConfig from 'my-react-query/queryClientConfig';
import ErrorBoundaryWrapper from 'providers/ErrorBoundaryWrapper';

import '../styles/globals.css';

function MyApp({
  Component,
  pageProps: { session, dehydratedState, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient(getQueryClientConfig()));

  return (
    <ErrorBoundaryWrapper wrapperName="root">
      <QueryClientProvider client={queryClient}>
        <Hydrate state={dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </ErrorBoundaryWrapper>
  );
}

export default MyApp;
