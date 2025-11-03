export default {
    name: 'sections',
    title: 'Footer Sections',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
        },
        {
            name: 'linkItem',
            title: 'Link Item',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name of the Link',
                            type: 'string',
                        },
                        {
                            name: 'redirectionLink',
                            title: 'Redirection Link',
                            type: 'url',
                        },
                    ],
                }
            ]
        },
    ],
};