import React, { FC, ReactNode, Suspense } from 'react';
import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
import Loading from 'components/Loading';
import { SuspenseType } from 'types';

type Props = {
  suspenseName: SuspenseType;
  children: ReactNode;
};

const SuspenseWrapper: FC<Props> = ({ children, suspenseName }) => {
  const { reset } = useQueryErrorResetBoundary();

  const fallbackRender = (fallbackProps: FallbackProps) => (
    <ErrorFallback {...fallbackProps} name={suspenseName} />
  );

  return (
    <QueryErrorResetBoundary>
      <ErrorBoundary fallbackRender={fallbackRender} onReset={reset}>
        <Suspense fallback={<Loading name={suspenseName} />}>{children}</Suspense>
      </ErrorBoundary>
    </QueryErrorResetBoundary>
  );
};

export default SuspenseWrapper;
