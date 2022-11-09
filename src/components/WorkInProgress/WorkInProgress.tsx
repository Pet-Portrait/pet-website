import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from 'components/Layout/Layout';

import './WorkInProgress.scss';

const WorkInProgress: FC = () => (
  <>
    <Layout>
      <div className="work-in-progress">
        <div className="work-in-progress__content">
          <StaticImage
            alt="Logo pet portrait"
            className="work-in-progress__logo"
            placeholder="none"
            src="../../images/logo.svg"
            width={200}
          />
          <div>
            <StaticImage
              alt="Dog in a builder helmet"
              className="work-in-progress__image"
              src="../../images/dog-wip.png"
            />

            <h2 className="work-in-progress__subtitle">Work in progress</h2>
          </div>
        </div>
      </div>
      <footer>
        <p className="work-in-progress__copy">pet portrait ® 2022</p>
      </footer>
    </Layout>
  </>
);

export default WorkInProgress;
