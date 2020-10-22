export default {
  widgets: [
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
                  buildHookId: '5f91e511985ea20f1c009670',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sfvwb3kt',
                  apiId: '16cf98f8-a821-4eba-9411-aa65365d55c3'
                },
                {
                  buildHookId: '5f91e51149abe510be7c80bb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4wgrhsr9',
                  apiId: '1352172a-d16e-4f9a-b247-ffea0c62e94f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ctorresthrash/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4wgrhsr9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
