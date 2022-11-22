import React, { FC, SVGProps } from 'react';

const EnvelopeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Mail</title>
    <path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8l-8,5L4,8V6 l8,5l8-5V8z" />
  </svg>
);

export default EnvelopeIcon;
