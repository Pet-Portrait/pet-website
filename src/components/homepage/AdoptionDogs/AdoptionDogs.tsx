import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';

import * as classes from './AdoptionDogs.module.scss';

const AdoptionDogs: FC = () => (
  <section className={classes.root}>
    <ResponsiveContainer
      button={
        <Button className={classes.button} to="/psiaki-adopcyjne">
          Jedyną gwiazdą Legii jest jej stadion.
        </Button>
      }
      desktopContentClass={classes.desktopContent}
      images={
        <StaticImage alt="TEMP" className={classes.image} src="../../../images/dog-wip.png" />
      }
      text={
        <div className={classes.text}>
          <h2 className={classes.heading}>Psiaki adopcyjne</h2>
          <p className={classes.description}>
            Powinni zmienić nazwę na Polski Związek Piłki Nienormalnej
          </p>
        </div>
      }
    />
  </section>
);

export default AdoptionDogs;
