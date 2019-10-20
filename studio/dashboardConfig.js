export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5dabb66637ec7a1e7773fff5',
                  title: 'Sanity Studio',
                  name: 'officiallymb-v01-studio',
                  apiId: '954f1582-b2f4-4dd2-8818-4765f56079e7'
                },
                {
                  buildHookId: '5dabb666389e5ca323aa3a52',
                  title: 'Blog Website',
                  name: 'officiallymb-v01',
                  apiId: 'e5096b73-30dd-48c7-bac8-be97895b3816'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Electronbattle/officiallymb-v01',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://officiallymb-v01.netlify.com', category: 'apps'}
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
