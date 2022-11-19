import React, { FC } from 'react';
import { Link } from 'gatsby';

import LogoIcon from 'components/shared/LogoIcon/LogoIcon';
import blobDesktop from 'images/backgrounds/hero-blob-desktop.png';
import blobMobile from 'images/backgrounds/hero-blob-mobile.png';

import * as classes from './Header.module.scss';

const Header: FC = () => (
  <header>
    <img alt="" className={classes.backgroundMobile} src={blobMobile} />
    <img alt="" className={classes.backgroundDesktop} src={blobDesktop} />
    <Link to="/">
      <LogoIcon className={classes.logo} />
    </Link>
  </header>
);

export default Header;
