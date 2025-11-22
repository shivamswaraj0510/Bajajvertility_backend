// /schemas/documents/highlightCardsSection.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'highlightCardsSection',
    title: 'Highlight Cards Section',
    type: 'document',
    fields: [
        defineField({
            name: 'internalTitle',
            title: 'Internal Title (CMS only)',
            type: 'string',
            description: 'For editors to identify the section in the studio.',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{

                type: 'object',
                fields: [
                    defineField({
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: { hotspot: true },
                        validation: rule => rule.required(),
                    }),
                    defineField({
                        name: 'imageAlt',
                        title: 'Image Alt Text',
                        type: 'string',
                        description: 'Accessible alt text describing the image.',
                        validation: rule => rule.required().min(3).max(160),
                    }),
                    defineField({
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                        validation: rule => rule.required().min(2).max(100),
                    }),
                    defineField({
                        name: 'description',
                        title: 'Description',
                        type: 'text',
                        rows: 3,
                        validation: rule => rule.required().min(10).max(300),
                    }),
                ],

            }],
            validation: rule =>
                rule
                    .min(1)
                    .max(3)
                    .error('Add between 1 and 3 highlight cards.'),
        }),
    ],
    preview: {
        select: {
            title: 'internalTitle',
            count: 'cards.length',
        },
        prepare({ title, count }) {
            return {
                title: title || 'Highlight Cards Section',
                subtitle: `${count} card(s)`,
            }
        },
    },
})