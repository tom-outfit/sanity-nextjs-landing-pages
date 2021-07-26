export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60fe0a8791a59d59a7d9c1e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-f3c576ns',
                  apiId: '49bfdc43-36d0-4aff-8be2-74ac2b34f371'
                },
                {
                  buildHookId: '60fe0a878d064d5e0b4ada34',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ea4gavj5',
                  apiId: 'b56d2902-6ec6-4973-9ae3-67cba8bd4b54'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tom-outfit/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ea4gavj5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
