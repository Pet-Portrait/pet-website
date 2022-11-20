import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `pet portrait`,
    description: `Weź udział w III edycji Pet Portrait  III edycji Pet Portrait i pomóż nam wesprzeć schroniska dla zwierząt Rasowe Kundle`,
    image: `/og-image.jpg`,
    siteUrl: `https://petportrait.pl`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['GT-NB9ZHZJ'],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-root-import',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms-pages`,
        path: `${__dirname}/cms`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `cms-images`,
        path: `${__dirname}/cms/images`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Jost`,
            file: `https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,700;1,400&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
