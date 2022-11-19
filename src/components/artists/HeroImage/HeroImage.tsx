import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import blob from 'images/backgrounds/background-bids-hero.svg';

import * as classes from './HeroImage.module.scss';

const HeroImage: FC = () => (
  <section className={classes.root}>
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Poznaj naszych artystów</h1>
        <p>
          Poznajcie naszych tegorocznych Artystów i Artystki - XXX osób o wielkich sercach i
          prawdziwym morzu talentu.
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
