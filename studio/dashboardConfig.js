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
                  buildHookId: '622e383f3697de08dc811515',
                  title: 'Sanity Studio',
                  name: 'technical-property-studio',
                  apiId: '4e945aea-fff3-4376-97c9-e6781b3583c3'
                },
                {
                  buildHookId: '622e383f4628f27d6d6bd5f8',
                  title: 'Landing pages Website',
                  name: 'technical-property',
                  apiId: 'e9bdc0c5-bd89-4b05-9bde-eef6a42ddde7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stew-roberts/technical-property',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://technical-property.netlify.app', category: 'apps' }
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
