import React, { FC, ReactNode } from 'react';
import { QueryErrorResetBoundary, useQueryErrorResetBoundary } from 'react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ErrorFallback from 'components/ErrorFallback';
import { WrapperName } from 'types';

type Props = {
  wrapperName: WrapperName;
  children: ReactNode;
};

const ErrorBoundaryWrapper: FC<Props> = ({ children, wrapperName }) => {
  const { reset } = useQueryErrorResetBoundary();

  const fallbackRender = (fallbackProps: FallbackProps) => (
    <ErrorFallback {...fallbackProps} name={wrapperName} />
  );

  return (
    <QueryErrorResetBoundary>
      <ErrorBoundary fallbackRender={fallbackRender} onReset={reset}>
        {children}
      </ErrorBoundary>
    </QueryErrorResetBoundary>
  );
};

export default ErrorBoundaryWrapper;
