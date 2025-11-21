// /schemas/navTop.js
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'navTop',
    title: 'Top Navigation Bar',
    type: 'document',

    fields: [
        defineField({
            name: 'offerText',
            title: 'Offer Text',
            type: 'string',
            validation: Rule =>
                Rule.required()
                    .min(10)
                    .max(160)
                    .warning('Keep it short for the top bar'),
        }),

        defineField({
            name: 'locationText',
            title: 'Location',
            type: 'string',
            validation: Rule => Rule.required(),
        }),

        defineField({
            name: 'emailText',
            title: 'Email Address',
            type: 'string',
            validation: Rule =>
                Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
                    name: 'email',
                    message: 'Enter a valid email address',
                }),
        }),

        defineField({
            name: 'phoneText',
            title: 'Phone Number',
            type: 'string',
            validation: Rule =>
                Rule.required().regex(/^[+()\-\s0-9]{7,}$/, {
                    name: 'phone',
                    message: 'Enter a valid phone number',
                }),
        }),
    ],

    preview: {
        select: {
            title: 'offerText',
            location: 'locationText',
            email: 'emailText',
            phone: 'phoneText',
        },
        prepare({ title, location, email, phone }) {
            const subtitle = [location, email, phone].filter(Boolean).join(' • ')
            return {
                title: title || 'Top Navigation Bar',
                subtitle,
            }
        },
    },

    initialValue: {
        offerText: 'Get a discount of up to 50% for use our service this month!',
        locationText: 'Kalyani Nagar, MH-411014',
        emailText: 'support@bajajvitality.com',
        phoneText: '+102 864 6444 2222',
    },
})