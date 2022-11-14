import React, { FC, ReactNode } from 'react';

import Footer from './Footer/Footer';

import 'styles/global.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <main>
    {children}
    <Footer />
  </main>
);

export default Layout;
