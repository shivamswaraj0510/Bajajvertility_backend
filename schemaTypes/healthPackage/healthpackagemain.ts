export default {
  name: 'healthpackageGroup',
  type: 'document',
  title: 'Health Package Group',
  fields: [
    {
      name: 'groupTitle',
      title: 'Group Title',
      type: 'string',
    },
    
    {
      name: 'packages',
      title: 'Health Packages',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'healthpackagecard'}], 
        },
      ],
    },
  ],
}
