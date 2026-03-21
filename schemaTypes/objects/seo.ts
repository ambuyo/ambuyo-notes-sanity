import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & Social',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Optimized for search engines. Ideally 50-60 characters.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated in search results.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'A brief summary of the page (150-160 characters).',
      validation: (Rule) => Rule.max(160).warning('Keep descriptions under 160 characters.'),
    }),
    defineField({
      name: 'shareImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Used for Open Graph (Facebook, LinkedIn) and Twitter cards.',
    }),
    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines',
      type: 'boolean',
      initialValue: false,
      description: 'Tick this to prevent search engines from indexing this page.',
    }),
  ],
})
