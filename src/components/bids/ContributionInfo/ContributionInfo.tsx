import React, { FC } from 'react';

import Button from 'components/shared/Button/Button';
import blob from 'images/backgrounds/background-bids-contribution.svg';

import * as classes from './ContributionInfo.module.scss';

const ContributionInfo: FC = () => (
  <>
    <img alt="" className={classes.image} loading="lazy" src={blob} />
    <div className={classes.wrapper}>
      <section className={classes.content}>
        <h2 className={classes.heading}>
          Żadne z dzieł nie wpadło ci w oko, a chcesz pomóc zwierzakom?
        </h2>
        <p className="text--large">
          Możesz kupić specjalnie zaprojektowaną, na taką okazję, wirtualną cegiełkę i wspomóc los
          zwierzaków w schroniskach. Po wpłacie kilku złotych na cel naszej akcji otrzymasz
          specjalnie zaprojektowany przez Nas Planer, który może Ci pomóc w rozplanowywaniu twojego
          tygodnia.
        </p>
        <Button
          className={classes.button}
          href="https://allegro.pl/oferta/planer-czern-biel-muflon-studio-12905031541"
          isExternal
        >
          Kup cegiełkę
        </Button>
      </section>
    </div>
  </>
);

export default ContributionInfo;
