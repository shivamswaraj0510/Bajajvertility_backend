// /schemas/joinTeamPage.ts
import { defineType, defineField } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export default defineType({
    name: 'joinTeamPage',
    title: 'carees blogs',
    type: 'document',
    icon: UsersIcon,

    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            description: 'Main heading (e.g., “Join Our Team”).',
        }),

        defineField({
            name: 'subheading',
            title: 'Subheading / Question',
            type: 'text',
            rows: 2,
            description:
                'The bold line under the title (e.g., “What makes building a career at ... so rewarding?”)',
        }),

        // Portable Text directly inline (no external object)
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
            description: 'Two paragraphs describing culture and invitation to join.',
        }),

    ],
})
