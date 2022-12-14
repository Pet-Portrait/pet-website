import React, { FC } from 'react';

import Button from 'components/shared/Button/Button';

import ImageFactory from './ImageFactory';

import * as classes from './HeroImage.module.scss';

const HeroImage: FC = () => (
  <section className={classes.root}>
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.heading}>Wylicytuj sztukę dla zwierzaka!</h1>
        <div className={classes.text}>
          <p>
            Weź udział w III edycji Pet Portrait III edycji Pet Portrait i pomóż nam wesprzeć
            schroniska dla zwierząt
          </p>
          <p>
            <strong>Licytuj</strong> prace 107 polskich Artystów i Artystek na Allegro Charytatywni
            | 21 XI - 26 XI 2022
          </p>
          <p>
            <strong>Oglądaj</strong> stacjonarnie wystawę w Elektrowni Powiśle | 21 XI - 26 XI 2022
          </p>
          <p>
            <strong> Pomagaj</strong> bezdomnym zwierzakom | zawsze
          </p>
        </div>
        <Button className={classes.button} to="/licytacje">
          Weź udział w licytacji
        </Button>
      </div>
      <ImageFactory />
    </div>
  </section>
);

export default HeroImage;
