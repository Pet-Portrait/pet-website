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
          Psygarnij Rasowego zwierzaka
        </Button>
      }
      desktopContentClass={classes.desktopContent}
      images={
        <StaticImage
          alt="Logo fundacji Rasowy Kundel"
          className={classes.image}
          objectFit="contain"
          src="../../../images/rasowy-kundel.jpg"
        />
      }
      text={
        <div>
          <h2 className={classes.heading}>Psiaki adopcyjne</h2>
          <p className={classes.description}>
            Trzecia edycja Pet Portrait jest realizowana we współpracy z Fundacją Rasowy Kundel.
            Chociaż od 2020 Fundacja skupia się przede wszystkim na działaniach prewencyjnych w
            walce z bezdomnością, to kilku jej podopiecznych wciąż czeka na nowy dom.
          </p>
        </div>
      }
    />
  </section>
);

export default AdoptionDogs;
