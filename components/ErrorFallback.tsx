import React, { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { WrapperName } from 'types';

type Props = { name: WrapperName } & FallbackProps;

const ErrorFallback: FC<Props> = ({ name, resetErrorBoundary }) => {
  return (
    <div className="w-full bg-red-400 text-center p-4" role="alert">
      <span className="mr-2">{`suspenseName: ${name}, ErrorFallback`}</span>
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          resetErrorBoundary();
        }}
      >
        Try again
      </a>
    </div>
  );
};

export default ErrorFallback;
