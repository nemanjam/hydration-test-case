import React, { FC, ReactNode } from 'react';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import SuspenseWrapper from 'providers/SuspenseWrapper';
import MeProvider from 'providers/Me';

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {

  return (
    <MeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="px-4 sm:px-0 flex-grow">

          {/* Views (page) level loading and error handling*/}
          <SuspenseWrapper suspenseName="layout">
            {children}
          </SuspenseWrapper>
        </main>

        <Footer />
      </div>
    </MeProvider>
  );
};

export default PageLayout;
