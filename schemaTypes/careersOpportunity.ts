export default {
    name: 'careerOpportunity',
    title: 'careers Opportunity Sections',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
        },
        {
            name: 'cards',
            title: 'Cards for opportunity',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'heading',
                            title: 'Heading Of Opportunity post',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Description Of Opportunity post',
                            type: 'string',
                        },
                        {
                            name: 'image',
                            title: 'Opportunity post Banner',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'cta',
                            title: 'Cta text Of Opportunity post',
                            type: 'string',
                        },
                        {
                            name: 'ctaUrl',
                            title: 'Redirection Link',
                            type: 'string',
                        },
                    ],
                }
            ]
        },
    ],
};