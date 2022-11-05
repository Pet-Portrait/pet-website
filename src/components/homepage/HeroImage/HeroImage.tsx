import Button from 'components/shared/Button/Button';
import logo from 'images/logo-black.svg';
import React, { FC } from 'react';

import * as classes from './HeroImage.module.scss';
import ImageFactory from './ImageFactory';

interface Props {
  artistName?: string;
  image: string;
  imageTitle: string;
}

const HeroImage: FC<Props> = () => (
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
    <ImageFactory />
  </section>
);

export default HeroImage;
