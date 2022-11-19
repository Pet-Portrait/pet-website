import React, { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { GatsbyLinkProps, Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import * as classes from './Button.module.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { isExternal?: never; to?: never };
type LinkProps = GatsbyLinkProps<unknown> & { isExternal?: never };
type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  isExternal: true;
  to?: never;
};

const Button: FC<ButtonProps | LinkProps | ExternalLinkProps> = ({
  children,
  className,
  to,
  isExternal,
  ...props
}) => {
  const classNames = `${classes.root} ${className}`;

  if (isExternal) {
    return (
      <OutboundLink
        className={classNames}
        href={to}
        rel="noopener noreferrer"
        target="_blank"
        {...(props as Omit<LinkProps, 'to' | 'ref'>)}
      >
        {children}
      </OutboundLink>
    );
  }

  if (to) {
    return (
      <Link className={classNames} to={to} {...(props as Omit<LinkProps, 'to' | 'ref'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} type="button" {...(props as ButtonProps)}>
      {children}
    </button>
  );
};

export default Button;
