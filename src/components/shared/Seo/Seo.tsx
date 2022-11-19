import React, { FC, ReactNode } from 'react';

import { useSiteMetadata } from 'hooks/useSiteMetadata';

interface Props {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
}

const Seo: FC<Props> = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta content={seo.description} name="description" />
      <meta content={seo.image} name="image" />
      <meta content={seo.title} property="og:title" />
      <meta content="website" property="og:type" />
      <meta content={seo.description} property="og:description" />
      <meta content={seo.image} property="og:image" />
      <meta content={seo.url} property="og:url" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content={seo.title} name="twitter:title" />
      <meta content={seo.url} name="twitter:url" />
      <meta content={seo.description} name="twitter:description" />
      <meta content={seo.image} name="twitter:image" />
      <link href="/favicon.png" rel="icon" type="image/png" />
      {children}
    </>
  );
};

export default Seo;
