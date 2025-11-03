// /schemas/excCardCarousel.ts
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'excCardCarousel',
    title: 'Excellence Card Carousel',
    type: 'document',
    fields: [
        // Section heading shown above the carousel
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'Main section heading shown above the carousel (e.g., "Center Of Excellence")'
        }),

        // Optional subheading line
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
            description: 'Secondary line below the heading (e.g., "The Park Flag-bearers")'
        }),

        // CTA (text + URL) like "view more"
        defineField({
            name: 'cta',
            title: 'CTA',
            type: 'object',
            fields: [
                defineField({
                    name: 'label',
                    title: 'Label',
                    type: 'string',
                    description: 'CTA text (e.g., "view more")'
                }),
                defineField({
                    name: 'href',
                    title: 'Link URL',
                    type: 'url',
                    description: 'Destination URL for the CTA'
                })
            ]
        }),

        // Visible items per viewport (defaults to 4 in the component)
        defineField({
            name: 'visible',
            title: 'Visible Items',
            type: 'number',
            description: 'How many cards to show at once',
            initialValue: 4,
            validation: (Rule) => Rule.min(1).max(12)
        }),

        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{
                type: 'excCard',
            },
            ]
        })
    ],
})