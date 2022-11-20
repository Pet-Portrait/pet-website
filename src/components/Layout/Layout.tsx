import React, { FC, ReactNode } from 'react';

import CookieBanner from 'components/shared/CookieBanner/CookieBanner';
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
    <Menu />
    {children}
    <Footer />
    <CookieBanner />
  </main>
);

export default Layout;
