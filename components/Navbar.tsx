import React, { FC, useContext } from 'react';
import { MeContext } from 'providers/Me';

const Navbar: FC = () => {
  const { me } = useContext(MeContext);

  return (
    <nav className="p-4 bg-sky-400">
      <span className="mr-2">Navbar</span>
      <span className="">User: {me?.name}</span>
    </nav>
  );
};

export default Navbar;
