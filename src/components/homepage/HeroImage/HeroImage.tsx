import React, { FC, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import useGyroscopicParallax from 'hooks/useGyroscopicParallax';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import useParallax from 'hooks/useParallax';

import ImageFactory from './ImageFactory';

import LogoIcon from '../../shared/LogoIcon/LogoIcon';

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
      <StaticImage
        alt=""
        className={classes.backgroundMobile}
        layout="fixed"
        placeholder="tracedSVG"
        src="../../../images/backgrounds/hero-blob-mobile.png"
      />
      <StaticImage
        alt=""
        className={classes.backgroundDesktop}
        height={350}
        layout="fixed"
        objectPosition="top left"
        placeholder="tracedSVG"
        src="../../../images/backgrounds/hero-blob-desktop.png"
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <LogoIcon className={classes.logo} />
          <h1 className={classes.heading}>Rzuć groszem dla zwierzaków poprzez licytację sztuki!</h1>
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
      </div>
    </section>
  );
};

export default HeroImage;
