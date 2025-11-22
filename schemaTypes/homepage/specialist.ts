import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'specialists',
    title: 'Our Specialist Section',
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
                        title: 'Doctor Name',
                        type: 'string',
                    }),
                    defineField({
                        name: 'profession',
                        title: 'Profession',
                        type: 'string',
                    }),
                ],

            }],
        }),
    ]
})