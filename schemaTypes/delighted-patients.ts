export default {
  name: 'delighted',
  title: 'Delighted',
  type: 'document',
  fields: [
    {
        name: 'title',
        title: 'Enter title',
        type: 'string'
    },
    {
      name: 'reviews',
      title: 'Patient Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image_link',
              title: 'Enter Image',
              type: 'image'
            },
            {
              name: 'image_description',
              title: 'Image Description',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
};