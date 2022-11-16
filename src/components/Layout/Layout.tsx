import React, { FC, ReactNode } from 'react';

import Menu from 'components/shared/Menu/Menu';

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
    <Menu />
    <Footer />
  </main>
);

export default Layout;
