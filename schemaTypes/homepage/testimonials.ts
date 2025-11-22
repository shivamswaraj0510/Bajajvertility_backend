import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'testimonials',
    title: 'Our Testimonials Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Title small logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'heading',
            title: 'Heading Text',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description Text',
            type: 'string',
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
                    }),
                    defineField({
                        name: 'imageAlt',
                        title: 'Image Alt Text',
                        type: 'string',
                        description: 'Accessible alt text describing the image.',
                    }),
                    defineField({
                        name: 'name',
                        title: 'Name',
                        type: 'string',
                    }),
                    defineField({
                        name: 'location',
                        title: 'Location',
                        type: 'string',
                    }),
                    defineField({
                        name: 'review',
                        title: 'Review',
                        type: 'text',
                        rows: 4,
                        description: 'review should be in betweend 50 to 100 words.',
                    }),
                    defineField({
                        name: 'rating',
                        title: 'Rating',
                        type: 'number',
                        initialValue: 5,
                        validation: Rule => Rule.min(1).max(5)
                    }),
                ],

            }],
        }),
    ]
})