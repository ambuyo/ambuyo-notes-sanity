import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import seofields from 'sanity-plugin-seofields'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Ambuyo.com',

  projectId: 'w804yga0',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Portfolio')
              .child(S.documentTypeList('caseStudy').title('Case Studies')),
            S.divider(),
            S.listItem()
              .title('Editorial')
              .child(
                S.list()
                  .title('Blog Management')
                  .items([
                    S.documentTypeListItem('post').title('All Posts'),
                    S.documentTypeListItem('author').title('Authors'),
                  ])
              ),
          ]),
    }),
    visionTool(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    seofields({ licenseKey: 'SEOF-752C-7588-73FF' } as any),
  ],

  schema: {
    types: schemaTypes,
  },
})
