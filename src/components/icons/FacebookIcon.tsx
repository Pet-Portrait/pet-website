import React, { FC, SVGProps } from 'react';

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Facebook</title>
    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.395,4.275,9.78,9.621,9.981v-6.942H9.278v-2.725h2.343v-2.005 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365v6.659C18.768,20.613,22,16.689,22,12C22,6.477,17.523,2,12,2z" />
  </svg>
);

export default FacebookIcon;
