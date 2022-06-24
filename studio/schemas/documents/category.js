import { TagIcon } from '@sanity/icons'

export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    icon: TagIcon,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
    ],
}