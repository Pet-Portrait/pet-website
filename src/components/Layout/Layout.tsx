import 'styles/global.scss';

import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => <main className="container">{children}</main>;

export default Layout;
