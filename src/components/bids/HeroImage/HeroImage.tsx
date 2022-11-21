import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import blob from 'images/backgrounds/background-bids-hero.svg';

import * as classes from './HeroImage.module.scss';

const HeroImage: FC = () => (
  <section className={classes.root}>
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Weź udział w licytacji i wesprzyj bezdomne zwierzaki!</h1>
        <p>
          132 - tyle dzieł polskich Artystów i Artystek znajdziesz na tegorocznym Pet Portrait.
          Grafiki, ilustracje, obrazy, hafty, ceramiki - psygarnij coś dla siebie!
        </p>
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
