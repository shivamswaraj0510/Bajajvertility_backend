export default {
  name: 'videoContent',
  title: 'Video Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videourl',
      title: 'Video File',
      type: 'file',
      description: 'Paste the YouTube or Vimeo video URL here',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}], // This gives you a rich text editor
      description: 'Write a detailed description or article here',
    },
  ],
}
