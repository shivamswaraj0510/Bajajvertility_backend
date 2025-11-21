import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'herocomponent',
    title: 'Hero Component',
    type: 'document',

    fields: [
        defineField(
            {
                name: 'heroImage',
                title: 'Hero Image in background',
                type: 'image',
                options: {
                    hotspot: true,
                },
            }
        ),
        defineField(
            {
                name: 'welcomeTextImage',
                title: 'Welcome Text Image',
                type: 'image',
                options: {
                    hotspot: true,
                },
            }
        ),
        defineField(
            {
                name: 'welcomeText',
                title: 'Welcome Text ',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'heading',
                title: 'Welcome Heading ',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'subheading',
                title: 'Welcome sub-Heading ',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'description',
                title: 'Description',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'firstCtaText',
                title: 'First Cta Text',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'firstCtaUrl',
                title: 'First Cta Url',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'watchVideoText',
                title: 'Watch Video',
                type: 'string',
            }
        ),
        defineField(
            {
                name: 'watchVideoUrl',
                title: 'Watch Video Url',
                type: 'string',
            }
        ),

        defineField({
            name: 'stats',
            title: 'Hero Stats',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'statNumber',
                        title: 'Stat Number',
                        type: 'string',
                    },
                    {
                        name: 'statLabel',
                        title: 'Stat Label',
                        type: 'string',
                    },
                ]
            }],
            validation: (Rule) => Rule.required().min(1).max(4)
        }),

    ]

})