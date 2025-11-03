export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name:'title',
      title:'Enter title',
      type:'string'
    },
    {
      name: 'footerSections',
      title: 'Footer Sections',
      type: 'array',
      of: [
        {
          type:'reference',
          to:[{type:'sections'}],
        }
      ],
    },
  ],
};