import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        defineField({
            name: 'brand',
            title: 'Brand',
            type: 'object',
            fields: [
                defineField({
                    name: 'logo',
                    title: 'Logo Image',
                    type: 'image',
                    options: { hotspot: true }
                }),
                defineField({
                    name: 'link',
                    title: 'Logo Link',
                    type: 'string'
                })
            ]
        }),

        defineField({
            name: 'utilityBar',
            title: 'Top Utility Bar',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'utilityItem',
                    title: 'Utility Item',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'href', title: 'Link (href)', type: 'string' }),
                        defineField({ name: 'icon', title: 'Icon', type: 'image' }),
                        defineField({ name: 'hasDropdown', title: 'Has Dropdown', type: 'boolean' }),
                        defineField({
                            name: 'dropdown',
                            title: 'Dropdown Menu',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    name: 'utilityDropdownItem',
                                    title: 'Dropdown Item',
                                    fields: [
                                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                                        defineField({ name: 'href', title: 'Link (href)', type: 'string' })
                                    ]
                                }
                            ],
                            hidden: ({ parent }) => !parent?.hasDropdown
                        })
                    ]
                }
            ]
        }),

        defineField({
            name: 'mainNav',
            title: 'Main Navigation',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'navItem',
                    title: 'Nav Item',
                    fields: [
                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                        defineField({ name: 'href', title: 'Link (href)', type: 'string' }),
                        defineField({ name: 'hasDropdown', title: 'Has Dropdown', type: 'boolean' }),

                        defineField({
                            name: 'children',
                            title: 'Dropdown Elements',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    name: 'navChild',
                                    title: 'Dropdown Element',
                                    fields: [
                                        defineField({ name: 'title', title: 'Title', type: 'string' }),
                                        defineField({ name: 'href', title: 'Link (href)', type: 'string' })
                                    ]
                                }
                            ],
                            hidden: ({ parent }) => !parent?.hasDropdown
                        })
                    ]
                }
            ]
        })
    ],
    preview: {
        prepare() {
            return { title: 'Header' }
        }
    }
})