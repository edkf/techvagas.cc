require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `vagas.cc`,
    heroHeadline: 'Vagas de Tecnologia',
    description: `Uma iniciativa que tem por objetivo trazer a esperança de um novo emprego, mesmo em meio à incerteza da pandemia.`,
    author: `Edgard Kozlowski`,
    thumbnail: 'src/images/vagascc.png',
    formUrl: 'https://airtable.com/shrcFKFGDq6WcGZkJ',
    footer: 'Projeto desenvolvido por <a href="https://edkf.com.br" target="_blank">@edkf</a>. Agradecimento especial à <a href="https://kaisermann.me/" target="_blank">@kwistian</a> e <a href="https://www.linkedin.com/in/leilacangussu/" target="_blank">@LeilaCristina</a>.'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/vagas-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.BASE_ID,
            tableName: process.env.TABLE_NAME,
            createSeparateNodeType: false,
            separateMapType: false,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-54127697-7",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1764349,
        sv: 6
      },
    },
  ]
}
