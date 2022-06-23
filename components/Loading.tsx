import React, { FC } from 'react';
import { SuspenseType } from 'types';

type Props = {
  name: SuspenseType;
};

const Loading: FC<Props> = ({name}) => {
  return <div className="w-full bg-green-300 p-4 text-center">{`suspenseName: ${name}, Loading...`}</div>;
};

export default Loading;
