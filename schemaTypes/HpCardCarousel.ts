import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'HpCardCarousel',
    title: 'Hp Card Carousel',
    type: 'document',

    fields: [
        // Toggle: image or video
        defineField({
            name: 'kind',
            title: 'Kind',
            type: 'string',
            description: 'Choose whether this card shows an Image or a Video',
            options: {
                list: [
                    { title: 'Image', value: 'image' },
                    { title: 'Video', value: 'video' }
                ],
                layout: 'radio', // horizontal radios in Studio
                direction: 'horizontal'
            },
            initialValue: 'image',
            validation: (Rule) => Rule.required()
        }),

        // Image (only when kind === 'image')
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            hidden: ({ parent }) => parent?.kind !== 'image',
            validation: (Rule) =>
                Rule.custom((val, ctx) => {
                    const k = (ctx?.parent as any)?.kind
                    if (k === 'image' && !val) return 'Image is required when kind is Image'
                    return true
                })
        }),

        defineField({
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                accept: 'video/*'
            },
            hidden: ({ parent }) => parent?.kind !== 'video',
            validation: (Rule) =>
                Rule.custom((val, ctx) => {
                    const k = (ctx?.parent as any)?.kind
                    if (k === 'video' && !val) return 'Video is required when kind is Video'
                    return true
                })
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Required for images; for videos, use it as a short description/caption',
            validation: (Rule) =>
                Rule.custom((val, ctx) => {
                    const k = (ctx?.parent as any)?.kind
                    if (k === 'image' && !val) return 'Alt text is recommended/required for accessibility'
                    return true
                })
        }),

        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Used to sort the cards in the carousel (ascending)'
        })
    ],

    preview: {
        select: {
            kind: 'kind',
            image: 'image',
            video: 'video',
            alt: 'alt',
            order: 'order'
        },
        prepare({ kind, image, video, alt, order }) {
            const title = alt || (kind === 'video' ? 'Video Card' : 'Image Card')
            const parts: string[] = []
            if (kind) parts.push(kind.charAt(0).toUpperCase() + kind.slice(1))
            if (typeof order === 'number') parts.push(`Order: ${order}`)

            return {
                title,
                subtitle: parts.join(' • '),
                media: kind === 'image' ? image : video // Studio will show a generic icon for file
            }
        }
    }
})