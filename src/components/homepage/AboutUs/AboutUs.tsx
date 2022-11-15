import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';

import blobDesktop from '../../../images/backgrounds/background-about-us.svg';
import blobMobile from '../../../images/backgrounds/background-about-us-mobile.svg';

import * as classes from './AboutUs.module.scss';

const AboutUs: FC = () => (
  <section className={classes.root}>
    <img alt="" className={classes.backgroundMobile} src={blobMobile} />
    <img alt="" className={classes.backgroundDesktop} src={blobDesktop} />
    <ResponsiveContainer
      button={
        <Button className={classes.button} to="/o-nas">
          Ryba śmierdzi od głowy
        </Button>
      }
      desktopContentClass={classes.desktopContent}
      images={
        <StaticImage alt="TEMP" className={classes.image} src="../../../images/dog-wip.png" />
      }
      text={
        <div className={classes.text}>
          <h2 className={classes.heading}>O nas</h2>
          <p className={classes.description}>
            W środowisku niesportowym PZPN ma fatalną opinię. Widziałem wyniki badań i żartowałem,
            że tylko Osama bin Laden ma gorsze notowania. Nawet PiS-owi bardziej się ufa.
          </p>
        </div>
      }
    />
  </section>
);

export default AboutUs;
