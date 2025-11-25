import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'subscribeNewsLatter',
    title: 'Subscribe News Latter Section',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description Text',
            type: 'string',
        }),

        defineField({
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
        }),
    ]
})