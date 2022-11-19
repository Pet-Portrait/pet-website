import React, { FC } from 'react';

import Button from 'components/shared/Button/Button';

import * as classes from './InfoTile.module.scss';

const InfoTile: FC = () => (
  <section className={classes.root}>
    <div>
      <h2 className={classes.heading}>
        Nie chcesz licytować żadnego dzieła, a chcesz pomóc zwierzakom?
      </h2>
      <p>
        Nie przejmuj się, specjalnie dla Ciebie przygotowaliśmy taką możliwość! Kliknij przycisk
        poniżej aby zakupić wirtualną cegiełkę i dostać tym samym specjalny cyfrowy planer, w ramach
        podziękowania!
      </p>
    </div>
    <Button className={classes.button} href="https://allegro.pl" isExternal>
      Kup cegiełkę i wybuduj dom! (nie wiem nie znam się na allegro)
    </Button>
  </section>
);

export default InfoTile;
