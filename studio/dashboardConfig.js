export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6203e748403cf372c8a98a20',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-96x2fv5k',
                  apiId: '7d69bc8a-0341-4ff3-a0eb-53868ecea428'
                },
                {
                  buildHookId: '6203e748b55fb80915fd6e60',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-etxbmbvk',
                  apiId: '0a55c037-2078-4c2a-8fbd-daddf1444c57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kr1st1nagr03g3r/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-etxbmbvk.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
