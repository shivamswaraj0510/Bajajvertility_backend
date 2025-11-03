import { defineType, defineField } from "sanity"
export default defineType({
          name: 'excCard',
          title: 'Excellence Card',
          type: 'object',
          fields: [
            
            defineField({
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
              description: 'Short subtext under the title (e.g., "2 BHK in downtown")'
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              description: 'Thumbnail shown in the card'
            }),
            defineField({
              name: 'order',
              title: 'Order',
              type: 'number',
              description: 'Manual ordering index (ascending)'
            }),
          ],
        })