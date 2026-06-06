import { defineField, defineType } from 'sanity'

export const cardWithoutImageType =
  defineType({
    name: 'cardWithoutImage',
    title: 'Kort utan bild',
    type: 'object',
    preview: {
      select: {
        title: 'headline_sv'
      }
    },
    fields: [
      defineField({name: 'headline_sv', title: 'Rubrik (SV)', type: 'string'}),
      defineField({name: 'headline_en', title: 'Rubrik (EN)', type: 'string'}),
      defineField({name: 'title_sv', title: 'Titel (SV)', type: 'string'}),
      defineField({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
      defineField({name: 'text_sv', title: 'Text (SE)', type: 'text'}),
      defineField({name: 'text_en', title: 'Text (EN)', type: 'text'}),
    ]
  })