import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'howItWorks',
    title: 'How It Works Section',
    type: 'document',
    fields: [
        defineField({
            name: 'label',
            title: 'Eyebrow Label',
            type: 'string',
            initialValue: 'HOW IT WORKS',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'steps',
            title: 'Steps (4 items)',
            type: 'array',
            of: [{ type: 'howItWorksStep' }],
            validation: (Rule) => Rule.min(4).max(4),
        }),
    ],
    preview: {
        select: { title: 'title' },
        prepare: ({ title }) => ({ title: title || 'How It Works' }),
    },
});