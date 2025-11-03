import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'cardCarousel',
    title: 'Card Carousel',
    type: 'document',
    fields: [
       // Section heading shown above the carousel
           defineField({
             name: 'heading',
             title: 'Heading',
             type: 'string',
             description: 'Main section heading shown above the carousel'
           }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
            description:
                'Introductory text paragraph shown below the heading'
        }),
           // Optional subheading line
           defineField({
             name: 'subheading',
             title: 'Subheading',
             type: 'string',
               description: 'Secondary line below the description section'
           }),

        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [ 
                {
                    type: 'object',
                    name: 'cardItem',
                    title: 'Card Item',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: { hotspot: true }
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt Text',
                            type: 'string'
                        }),
                        defineField({
                            name: 'order',
                            title: 'Order',
                            type: 'number'
                        }),

                        defineField({
                            name: 'rating',
                            title: 'Rating',
                            type: 'number',
                            description: 'Star rating from 0 to 5',
                            validation: (Rule) =>
                                Rule.min(0)
                                    .max(5)
                                    .precision(1) 
                        })
                    ],
                }
            ]
        })
    ],
})