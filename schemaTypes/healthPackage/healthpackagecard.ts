export default {
  name: 'healthpackagecard',
  type: 'document',
  title: 'Health Package Card',
  fields: [
    {
      name: 'cardTitle',
      title: 'Card Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
