import React, { FC, ReactNode, Suspense } from 'react';
import Loading from 'components/Loading';
import { WrapperName } from 'types';

type Props = {
  wrapperName: WrapperName;
  children: ReactNode;
};

const SuspenseWrapper: FC<Props> = ({ children, wrapperName }) => {
  return (<Suspense fallback={<Loading name={wrapperName} />}>{children}</Suspense>);
};

export default SuspenseWrapper;
