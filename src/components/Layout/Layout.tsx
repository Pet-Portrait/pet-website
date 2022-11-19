import React, { FC, ReactNode } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import LogoIcon from 'components/shared/LogoIcon/LogoIcon';

import Footer from './Footer/Footer';

import 'styles/global.scss';
import * as classes from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => (
  <main>
    <StaticImage
      alt=""
      className={classes.backgroundMobile}
      layout="fixed"
      placeholder="tracedSVG"
      src="../../../images/backgrounds/hero-blob-mobile.png"
    />
    <StaticImage
      alt=""
      className={classes.backgroundDesktop}
      height={350}
      layout="fixed"
      objectPosition="top left"
      placeholder="tracedSVG"
      src="../../../images/backgrounds/hero-blob-desktop.png"
    />
    <LogoIcon className={classes.logo} />
    {children}
    <Footer />
  </main>
);

export default Layout;
