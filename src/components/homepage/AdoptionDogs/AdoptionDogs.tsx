import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';

import blobDesktop from '../../../images/backgrounds/background-adoption.svg';
import blobMobile from '../../../images/backgrounds/background-adoption-mobile.svg';

import * as classes from './AdoptionDogs.module.scss';

const AdoptionDogs: FC = () => (
  <section className={classes.root}>
    <img alt="" className={classes.backgroundMobile} src={blobMobile} />
    <img alt="" className={classes.backgroundDesktop} src={blobDesktop} />
    <ResponsiveContainer
      button={
        <Button className={classes.button} href="https://rasowykundel.org/" isExternal>
          Zaadoptuj psiaka
        </Button>
      }
      desktopContentClass={classes.desktopContent}
      images={
        <StaticImage alt="TEMP" className={classes.image} src="../../../images/dog-wip.png" />
      }
      text={
        <div>
          <h2 className={classes.heading}>Psiaki adopcyjne</h2>
          <p className={classes.description}>
            Cały dochód z akcji przejdzie na fundację Rasowy Kundel.
          </p>
        </div>
      }
    />
  </section>
);

export default AdoptionDogs;
