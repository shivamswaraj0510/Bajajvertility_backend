import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'thirdSectionSingleCarousel',
    title: 'Third Section — Single Card Carousel',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'e.g., "Explore the World of Quality Healthcare"'
        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
            description:
                'Introductory text paragraph shown below the heading in ThirdSection'
        }),

        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [
                defineType({
                    name: 'sectionStat',
                    title: 'Section Stat',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'string',
                            description: 'Number or short value (e.g., "13", "3000", "890+")'
                        }),
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            description: 'Descriptor (e.g., "NABH Accredited Hospitals")'
                        })
                    ],
                    preview: {
                        select: { value: 'value', label: 'label' },
                        prepare({ value, label }) {
                            return {
                                title: value || 'Value',
                                subtitle: label || ''
                            }
                        }
                    }
                })
            ]
        }),
        defineField({
            name: 'visible',
            title: 'Visible Items',
            type: 'number',
            initialValue: 1,
            validation: (Rule) => Rule.min(1).max(6)
        }),

        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                defineType({
                    name: 'singleCarouselCard',
                    title: 'Single Carousel Card',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'image',
                            title: 'Image',
                            type: 'image',
                            options: { hotspot: true },
                            description: 'Displayed in the card (component supports image URL)'
                        }),
                        defineField({
                            name: 'order',
                            title: 'Order',
                            type: 'number',
                            description: 'Manual ordering index (ascending)'
                        })
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            media: 'image',
                            subtitle: 'subtitle',
                            rating: 'rating',
                            renaking: 'renaking',
                            order: 'order'
                        },
                        prepare({ title, media, subtitle, rating, renaking, order }) {
                            const effectiveRating =
                                typeof rating === 'number'
                                    ? rating
                                    : typeof renaking === 'number'
                                        ? renaking
                                        : null
                            const parts = []
                            if (subtitle) parts.push(subtitle)
                            if (typeof order === 'number') parts.push(`Order: ${order}`)
                            if (typeof effectiveRating === 'number') parts.push(`★ ${effectiveRating}/5`)
                            return {
                                title: title || 'Card',
                                subtitle: parts.join(' • '),
                                media
                            }
                        }
                    }
                })
            ]
        })
    ],

    preview: {
        select: {
            title: 'heading',
            description: 'description',
            visible: 'visible',
            stats: 'stats',
            cards: 'cards'
        },
        prepare({ title, description, visible, stats, cards }) {
            const statCount = Array.isArray(stats) ? stats.length : 0
            const cardCount = Array.isArray(cards) ? cards.length : 0
            return {
                title: title || 'Third Section — Single Card Carousel',
                subtitle: [
                    visible ? `Visible: ${visible}` : null,
                    statCount ? `${statCount} stat(s)` : 'No stats',
                    cardCount ? `${cardCount} card(s)` : 'No cards'
                ]
                    .filter(Boolean)
                    .join(' • ')
            }
        }
    }
})