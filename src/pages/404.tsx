import React from 'react';
import type { HeadFC } from 'gatsby';

import WorkInProgress from 'components/WorkInProgress/WorkInProgress';

const NotFoundPage = () => <WorkInProgress />;

export default NotFoundPage;

export const Head: HeadFC = () => <title>pet portrait</title>;
