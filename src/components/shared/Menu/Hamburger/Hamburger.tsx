import React, { FC } from 'react';

import * as classes from './Hamburger.module.scss';

interface Props {
  isOpen: boolean;
}

const Hamburger: FC<Props> = ({ isOpen }) => (
  <div className={`${classes.root} ${isOpen ? classes.isOpen : ''}`}>
    <span className={classes.line} />
    <span className={classes.line} />
    <span className={classes.line} />
  </div>
);

export default Hamburger;
