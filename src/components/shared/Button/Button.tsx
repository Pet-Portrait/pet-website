import React, { ButtonHTMLAttributes, FC } from 'react';

import * as classes from './Button.module.scss';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button className={`${classes.root} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
