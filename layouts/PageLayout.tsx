import React, { FC, ReactNode } from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import SuspenseWrapper from 'providers/SuspenseWrapper';
import MeProvider from 'providers/Me';
import ErrorBoundaryWrapper from 'providers/ErrorBoundaryWrapper';

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <SuspenseWrapper wrapperName="root">
      <MeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="mx-auto w-full sm:max-w-md md:max-w-xl flex-grow flex flex-col">
            <ErrorBoundaryWrapper wrapperName="page">
              <SuspenseWrapper wrapperName="page">{children}</SuspenseWrapper>
            </ErrorBoundaryWrapper>
          </main>

          <Footer />
        </div>
      </MeProvider>
    </SuspenseWrapper>
  );
};

export default PageLayout;
