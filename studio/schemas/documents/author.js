import { UserIcon } from '@sanity/icons'

export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    icon: UserIcon,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
        },
        {
            name: 'gravatar',
            type: 'string',
            title: 'Gravatar URL',
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'gravatar',
        },
    } 
}