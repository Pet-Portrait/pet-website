import { GatsbyLinkProps, Link } from 'gatsby';
import React, { ButtonHTMLAttributes, FC } from 'react';

import * as classes from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { to?: never };
type LinkProps = GatsbyLinkProps<unknown>;

const Button: FC<ButtonProps | LinkProps> = ({ children, className, to, ...props }) => {
  const classNames = `${classes.root} ${className}`;

  if (to) {
    return (
      <Link className={classNames} to={to} {...(props as Omit<LinkProps, 'to' | 'ref'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...(props as ButtonProps)}>
      {children}
    </button>
  );
};

export default Button;
