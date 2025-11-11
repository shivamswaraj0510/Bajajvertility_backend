// /schemas/joinTeamPage.ts
import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export default defineType({
    name: 'hrmission',
    title: 'Mission blogs',
    type: 'document',
    icon: UsersIcon,

    fields: [
        defineField({
            name: 'heading',
            title: 'Blog Title',
            type: 'string',
        }),

        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'Quote', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Numbered', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    { name: 'openInNewTab', type: 'boolean', title: 'Open in new tab', initialValue: false },
                                ],
                            },
                        ],
                    },
                },
            ],
        }),
        defineField({
            name: 'imageOnLeft',
            title: 'Do you want image on left',
            type: 'boolean',
        }),
        defineField({
            name: 'image',
            title: 'Blog Banner',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'order',
            title: 'order of blog',
            type: 'number',
        })
    ],
})
