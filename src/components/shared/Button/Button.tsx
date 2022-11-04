import React, { FC, ReactNode } from 'react';

import * as classes from './Button.module.scss';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => <button className={classes.root}>{children}</button>;

export default Button;
