import React, { FC } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Button from 'components/shared/Button/Button';
import ResponsiveContainer from 'components/shared/ResponsiveContainer/ResponsiveContainer';

import blobDesktop from '../../../images/backgrounds/background-about-us.svg';
import blobMobile from '../../../images/backgrounds/background-about-us-mobile.svg';

import * as classes from './AboutUs.module.scss';

const AboutUs: FC = () => (
  <section className={classes.root}>
    <img alt="" className={classes.backgroundMobile} src={blobMobile} />
    <img alt="" className={classes.backgroundDesktop} src={blobDesktop} />
    <ResponsiveContainer
      button={
        <Button className={classes.button} to="/o-nas">
          Dowiedz się więcej o Pet Portrait
        </Button>
      }
      desktopContentClass={classes.desktopContent}
      images={
        <Link className={classes.link} to="/o-nas">
          <StaticImage
            alt="4 psy na wystawie Pet Portrait"
            className={classes.image}
            src="../../../images/dogs.jpg"
            width={700}
          />
        </Link>
      }
      text={
        <div>
          <h2 className={classes.heading}>O nas</h2>
          <p className={classes.description}>
            Pet Portrait to inicjatywa stworzona z pasji do sztuki i miłości do zwierząt. Pomaganie
            zwierzętom uznajemy za nasz psi obowiązek. A to tylko jedna z naszych cech!
          </p>
        </div>
      }
    />
  </section>
);

export default AboutUs;
