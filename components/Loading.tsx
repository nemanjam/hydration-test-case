import React, { FC } from 'react';
import { WrapperName } from 'types';

type Props = {
  name: WrapperName;
};

const Loading: FC<Props> = ({ name }) => {
  // this causes it
  // Uncaught Error: This Suspense boundary received an update before it finished hydrating.
  // This caused the boundary to switch to client rendering.
  // The usual way to fix this is to wrap the original update in startTransition.

  const rootLoader = 'bg-green-300 min-h-screen';
  const pageLoader = 'bg-pink-300';
  const bgClass = name === 'root' ? rootLoader : pageLoader;

  return (
    <div className={`p-4 flex justify-center items-center ${bgClass}`}>
      <span>{`suspenseName: ${name}, Loading...`}</span>
    </div>
  );
};

export default Loading;
