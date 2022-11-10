import React, { FC, ReactNode } from 'react';

import * as classes from './ResponsiveContainer.module.scss';

interface Props {
  text: ReactNode;
  images: ReactNode;
  button: ReactNode;
  desktopContentClass?: string;
}

const ResponsiveContainer: FC<Props> = ({ text, button, images, desktopContentClass }) => (
  <>
    <div className={classes.mobile}>
      {text}
      {images}
      {button}
    </div>
    <div className={classes.desktop}>
      <div className={`${classes.desktopContent} ${desktopContentClass}`}>
        {text}
        {button}
      </div>
      {images}
    </div>
  </>
);

export default ResponsiveContainer;
