import { InfoFilledIcon } from '@sanity/icons'

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  icon: InfoFilledIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
    },
    {
      name: 'body',
      type: 'portableText',
      title: 'Body',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: { type: 'author' },
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [ { type: 'reference', to: [{ type: 'category' }] } ],
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'hero.image',
    },
  },
}
