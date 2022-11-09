import React, { FC, ReactNode } from 'react';

import 'styles/global.scss';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => <main className="container">{children}</main>;

export default Layout;
