import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'findDocotrsHeroBanner',
    title: ' Find Docotrs HeroBanner',
    type: 'document',
    fields: [
        defineField({
            name: 'bannerText',
            title: 'Banner text',
            type: 'string',
            description:
                'shown on the banner'
        }),
        defineField({
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'cascadingDropdown',
            title: 'cascadingDropdown',
            type: 'array',
            of: [{
                type: 'dropdown',
            },
            ]
        })

    ]
})