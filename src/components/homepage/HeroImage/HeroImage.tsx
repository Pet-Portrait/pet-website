import React, { FC, useRef, useState } from 'react';

import Button from 'components/shared/Button/Button';
import useGyroscopicParallax from 'hooks/useGyroscopicParallax';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useParallax from 'hooks/useParallax';
import logo from 'images/logo-black.svg';

import ImageFactory from './ImageFactory';

import * as classes from './HeroImage.module.scss';

const HeroImage: FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isParallaxEnabled, setIsParallaxEnabled] = useState(true);
  useIntersectionObserver(
    imageRef,
    ([entry]) => {
      setIsParallaxEnabled(entry.isIntersecting);
    },
    { threshold: 0.9 },
  );
  useParallax(imageRef, { enabled: isParallaxEnabled });
  useGyroscopicParallax(imageRef, { enabled: isParallaxEnabled });

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
        <Button className={classes.button} to="/licytacje">
          Kup bilet na żyletę
        </Button>
      </div>
      <ImageFactory ref={imageRef} />
    </section>
  );
};

export default HeroImage;
