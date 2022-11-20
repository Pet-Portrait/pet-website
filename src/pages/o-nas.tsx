/* eslint-disable react/prop-types */

import React, { FC } from 'react';
import { HeadFC } from 'gatsby';

import AboutUs from 'components/aboutUs/AboutUs';
import Seo from 'components/shared/Seo/Seo';

const AboutUsPage: FC = () => <AboutUs />;

export default AboutUsPage;

export const Head: HeadFC = ({ location }) => (
  <Seo pathname={location.pathname} title="pet portrait | o nas" />
);
