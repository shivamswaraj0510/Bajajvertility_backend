import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'howItWorksStep',
    title: 'How It Works Step',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Step Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(120),
        }),
        defineField({
            name: 'description',
            title: 'Step Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: { title: 'title' },
    },
});