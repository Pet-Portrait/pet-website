import 'styles/global.scss';

import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => <main>{children}</main>;

export default Layout;
