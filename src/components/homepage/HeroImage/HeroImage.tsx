import Button from 'components/shared/Button/Button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import logo from 'images/logo-black.svg';
import React, { FC } from 'react';

import * as classes from './HeroImage.module.scss';
import { HeroImageData } from './queries';

interface Props {
  image: HeroImageData;
}

const HeroImage: FC<Props> = ({ image }) => {
  const heroImage = getImage(image.childImageSharp);

  return (
    <section className={classes.root}>
      <div>
        <img alt="Logo pet portrait" className={classes.logo} src={logo} />
        <h1>Rzuć groszem dla zwierzaków poprzez licytację sztuki!</h1>
        <p className={classes.text}>
          Myślę, że warto podać zwycięski skład Kaiserslautern z meczu z Bayernem w sezonie 97/98:
          Renke, Kadlec, H. Koch (31. Hristov), Kuka, Marschall, Ratinho (75. Reich), Roos,
          Schjönberg, Schäfer, Sforza, M. Wagner. I jeszcze Ballack.
        </p>
        <Button className={classes.button}>Kup bilet na żyletę</Button>
      </div>
      {heroImage && (
        // TODO :Think how to pass alt and add artist name to image
        <GatsbyImage alt="aa" image={heroImage} objectFit="contain" objectPosition="bottom" />
      )}
    </section>
  );
};

export default HeroImage;
