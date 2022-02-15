export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620bf4593c1da30c8bb78b31',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-m7y1ep8f',
                  apiId: '97129f34-5f81-48d6-97a3-06e68c9bbb89'
                },
                {
                  buildHookId: '620bf45949c9920a5a5903ab',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-g8a22nfy',
                  apiId: '870c9a71-ac29-4d62-8d41-151224dc1cf3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thinkcollege/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-g8a22nfy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
