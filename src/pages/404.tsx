import React from 'react';
import type { HeadFC } from 'gatsby';

import Layout from 'components/Layout/Layout';
import Button from 'components/shared/Button/Button';
import Seo from 'components/shared/Seo/Seo';

const NotFoundPage = () => (
  <Layout>
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Button to="/">Wróć na stronę główną</Button>
    </div>
  </Layout>
);

export default NotFoundPage;

export const Head: HeadFC = () => <Seo />;
