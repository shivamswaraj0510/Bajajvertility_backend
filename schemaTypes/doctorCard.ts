// /schemas/doctor.ts
import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export default defineType({
    name: 'doctor',
    title: 'Doctor Cards',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., Jaipur',
        }),
        defineField({
            name: 'image',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Prefer a square image for better cropping.',
        }),
        defineField({
            name: 'experience',
            title: 'Qualifications / Experience',
            type: 'text',
            rows: 2,
            description:
                'e.g., MBBS, MD , Fellowship in Pain Medicine',
        }),
        defineField({
            name: 'designation',
            title: 'Designation',
            type: 'string',
            description: 'e.g., Sr. Consultant',
        }),
        defineField({
            name: 'speciality',
            title: 'Speciality',
            type: 'string',
            description: 'e.g., Cardiologist',
        }),
        defineField({
            name: 'appointmentUrl',
            title: 'Appointment URL',
            type: 'string',
            description:
                'CTA link for “Book an Appointment”. Leave empty to hide the button.',
        }),
        defineField({
            name: 'profileUrl',
            title: 'Profile URL',
            type: 'string',
            description:
                'CTA link for “View Profile”. Could be an internal route or external page.',
        }),
        defineField({
            name: 'order',
            title: 'Manual Sort Order',
            type: 'number',
            description: 'Use to control ordering on the page (lower shows first).',
        }),
    ],
})
