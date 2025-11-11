export default {
  name: 'aboutUsCompmain',
  type: 'document',
  title: 'About Us Component Main',
  fields: [
    {
      name: 'title1',
      type: 'string',
      title: 'Title1',
    },
    {
      name: 'components',
      title: 'Components',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'aboutUsComp1'}],
        },
      ],
    },
  ],
}
