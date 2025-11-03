export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Carousel Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(80),
    },
    {
      name: 'items',
      title: 'Carousel Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'carouselItem',
          title: 'Carousel Item',
          fields: [
            {
              name: 'carousel_image_description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'carousel_image_link',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'button_text',
              title: 'Button Text',
              type: 'string',
              validation: (Rule) => Rule.max(40),
            },
          ],
        },
      ],
    },
  ],
};