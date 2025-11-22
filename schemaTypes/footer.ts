export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'cta_text',
      title: 'Enter text(slogan)',
      type: 'string'
    },
    {
      name: 'cta_description',
      title: 'Enter description',
      type: 'string'
    },
    {
      name: 'btn_text1',
      title: 'Enter button text 1',
      type: 'string'
    },
    {
      name: 'btn_text2',
      title: 'Enter button text 2',
      type: 'string'
    },
    {
      name: 'btn_text3',
      title: 'Enter button text 3',
      type: 'string'
    },
    {
      name: 'btn_text4',
      title: 'Enter button text 4',
      type: 'string'
    },
    {
      name: 'section_title',
      title: 'Enter sections title',
      type: 'string'
    },
    {
      name: 'footerSections',
      title: 'Footer Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'sections' }],
        }
      ],
    },
    {
      name: 'section_title2',
      title: 'Enter sections title 2',
      type: 'string'
    },
    {
      name: 'footerSections2',
      title: 'Footer Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'sections' }],
        }
      ],
    },
  ],
};
