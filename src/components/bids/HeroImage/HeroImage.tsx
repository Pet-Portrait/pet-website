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
          Myślę, że warto podać zwycięski skład Kaiserslautern z meczu z Bayernem w sezonie 97/98:
          Renke, Kadlec, H. Koch (31. Hristov), Kuka, Marschall, Ratinho (75. Reich), Roos,
          Schjönberg, Schäfer, Sforza, M. Wagner. I jeszcze Ballack.
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
