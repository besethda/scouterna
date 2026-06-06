import { defineField, defineType } from 'sanity'

// This one is an object with a title, description, and then an array of images with alt strings.

export const boatSection =
  defineType({
    name: 'boatSection',
    title: 'Båtsektion',
    type: 'object',
    fields: [
      defineField({name:'title_sv', title: 'Titel (SV)', type:'string'}),
      defineField({name:'title_en', title: 'Titel (EN)', type:'string'}),
      defineField({name:'description_sv', title: 'Beskrivningen (SV)', type:'text'}),
      defineField({name:'description_en', title: 'Beskrivningen (EN', type:'text'}),
      defineField({name:'boatSectionImages', title: 'Båtsektion bilder', type:'array', of: [
          defineField({name:'boatImage', title: 'Båtbild', type: 'image', fields: [
            defineField({name: 'description_sv', title: 'Text (SV)', type:'string'}),
            defineField({name: 'description_en', title: 'Text (EN)', type:'string'}),
            defineField({name: 'alt', title: 'Alt-text', type:'string'})
          ]})
        ]}),
    ]
  })