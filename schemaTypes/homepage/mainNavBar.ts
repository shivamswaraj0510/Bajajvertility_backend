
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'mainnavbar',
    title: 'Main Navigation',
    type: 'document',

    fields: [
        defineField({
            name: 'navItems',
            title: 'Nav Items',
            type: 'array',
            of: [
                defineField({
                    name: 'navItem',
                    title: 'Nav Item',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: Rule => Rule.required().min(2).max(50),
                        }),
                        defineField({
                            name: 'href',
                            title: 'URL (href)',
                            type: 'string',
                            validation: Rule =>
                                Rule.required().regex(/^\/[^\s]*$/, {
                                    name: 'path',
                                    message: 'Use site-relative paths like /about or /contact',
                                }),
                        }),
                        defineField({
                            name: 'dropdown',
                            title: 'Dropdown',
                            type: 'array',
                            of: [
                                defineField({
                                    name: 'dropdownItem',
                                    title: 'Dropdown Item',
                                    type: 'object',
                                    fields: [
                                        defineField({
                                            name: 'label',
                                            title: 'Label',
                                            type: 'string',
                                            validation: Rule => Rule.required().min(2).max(60),
                                        }),
                                        defineField({
                                            name: 'href',
                                            title: 'URL (href)',
                                            type: 'string',
                                            validation: Rule =>
                                                Rule.required().regex(/^\/[^\s]*$/, {
                                                    name: 'path',
                                                    message: 'Use site-relative paths like /healthpackage',
                                                }),
                                        }),
                                    ],
                                }),
                            ],
                            options: {
                                layout: 'list',
                            },
                        }),
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'href' },
                    },
                }),
            ],
            validation: Rule => Rule.min(1).warning('Add at least one nav item'),
        }),

        defineField({
            name: 'openHoursTitle',
            title: 'Open Hours Title',
            type: 'string',
            validation: Rule => Rule.required().min(3).max(40),
        }),
        defineField({
            name: 'openHoursTimeline',
            title: 'Open Hours Timeline',
            type: 'string',
            validation: Rule =>
                Rule.required()
                    .min(8)
                    .max(100)
                    .warning('Keep the hours concise, e.g., "Mon - Sat: 8:00 AM - 9:00 PM"'),
        }),

        // RIGHT: CTA button
        defineField({
            name: 'ctaLabel',
            title: 'CTA Button Label',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(40),
        }),
        defineField({
            name: 'ctaHref',
            title: 'CTA Button URL (href)',
            type: 'string',
            validation: Rule =>
                Rule.required().regex(/^\/[^\s]*$/, {
                    name: 'path',
                    message: 'Use site-relative paths like /appointment',
                }),
        }),
    ],

    preview: {
        select: {
            firstItem: 'navItems.0.label',
            hoursTitle: 'openHoursTitle',
            ctaLabel: 'ctaLabel',
        },
        prepare({ firstItem, hoursTitle, ctaLabel }) {
            const title = 'Bottom Navigation'
            const subtitle = [
                firstItem ? `First: ${firstItem}` : null,
                hoursTitle ? `Hours: ${hoursTitle}` : null,
                ctaLabel ? `CTA: ${ctaLabel}` : null,
            ]
                .filter(Boolean)
                .join(' • ')
            return { title, subtitle }
        },
    },

    initialValue: {
        navItems: [
            { label: 'About Us', href: '/about' },
            { label: 'Services', href: '/buy-madicines' },
            { label: 'Our Locations', href: '/contact' },
            { label: 'Contact', href: '/healthpackage' },
            {
                label: 'Know More',
                href: '/healthpackage',
                dropdown: [
                    { label: 'Health Packages', href: '/healthpackage' },
                    { label: 'Health Packages', href: '/healthpackage' },
                    { label: 'Health Packages', href: '/healthpackage' },
                ],
            },
        ],
        openHoursTitle: 'Open Hours',
        openHoursTimeline: 'Mon - Sat: 8:00 AM - 9:00 PM',
        ctaLabel: 'Book Appoinment',
        ctaHref: '/',
    },
})