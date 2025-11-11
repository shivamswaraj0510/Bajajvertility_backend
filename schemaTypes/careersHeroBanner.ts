export default {
    name: 'careersHeroBanner',
    title: 'Careers Hero Banner',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Banner Heading',
            type: 'string',
        },
        {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }
    ],
};