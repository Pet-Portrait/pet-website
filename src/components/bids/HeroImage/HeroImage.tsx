import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import blob from 'images/backgrounds/background-bids-hero.svg';

import * as classes from './HeroImage.module.scss';

const HeroImage: FC = () => (
  <section className={classes.root}>
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Weź udział w licytacji i wesprzyj bezdomne zwierzaki!</h1>
        <p>
          133 - tyle dzieł polskich Artystów i Artystek znajdziesz na tegorocznym Pet Portrait.
          Grafiki, ilustracje, obrazy, hafty, ceramiki - psygarnij coś dla siebie!
        </p>
        <Button
          className={classes.button}
          href="https://allegro.pl/charytatywni/fundacja-rasowy-kundel/cele/pet-portrait-x-rasowy-kundel"
          isExternal
        >
          Zobacz wszystkie licytacje
        </Button>
      </div>
      <StaticImage
        alt="Kot w okularach przeciwsłonecznych"
        className={classes.image}
        objectFit="contain"
        placeholder="blurred"
        src="../../../images/bids-hero.png"
      />
    </div>
    <img alt="" className={classes.blob} src={blob} />
  </section>
);

export default HeroImage;
