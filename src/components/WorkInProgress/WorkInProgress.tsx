import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout/Layout';

import './WorkInProgress.scss';

const WorkInProgress: FC = () => (
  <>
    <Layout>
      <div className="work-in-progress">
        <div className="work-in-progress__content">
          <h1 className="work-in-progress__title">pet portrait</h1>
          <StaticImage
            alt="Dog in a builder helmet"
            className="work-in-progress__image"
            src="../../images/dog-wip.png"
          />

          <h2 className="work-in-progress__subtitle">Work in progress</h2>
        </div>
      </div>
      <footer>
        <p className="work-in-progress__copy">pet portrait ® 2022</p>
      </footer>
    </Layout>
  </>
);

export default WorkInProgress;
