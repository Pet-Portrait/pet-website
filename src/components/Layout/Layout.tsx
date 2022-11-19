import React, { FC, ReactNode } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';

import 'styles/global.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
);

export default Layout;
