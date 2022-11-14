import React, { FC, ReactNode } from 'react';

import * as classes from './ResponsiveContainer.module.scss';

interface Props {
  text: ReactNode;
  images: ReactNode;
  button: ReactNode;
  desktopContentClass?: string;
  desktopClass?: string;
  mobileClass?: string;
}

const ResponsiveContainer: FC<Props> = ({
  text,
  button,
  images,
  desktopContentClass,
  desktopClass,
  mobileClass,
}) => (
  <>
    <div className={`${classes.mobile} ${mobileClass}`}>
      {text}
      {images}
      {button}
    </div>
    <div className={`${classes.desktop} ${desktopClass}`}>
      <div className={`${classes.desktopContent} ${desktopContentClass}`}>
        {text}
        {button}
      </div>
      {images}
    </div>
  </>
);

export default ResponsiveContainer;
