import { defineField, defineType } from 'sanity'

// This one is an object with a title, description, and then an array of images with alt strings.

export const boatSectionType =
  defineType({
    name: 'boatSection',
    title: 'Båtsektion',
    type: 'object',
    fields: [
      defineField({name:'title', title: 'Titel', type:'string'}),
      defineField({name:'description', title: 'Beskrivningen', type:'text'}),
      defineField({
        name:'boatSectionImages', 
        title: 'Båtsektion bilder', 
        type:'array', 
        of: [
          {name:'boatImage', title: 'Båtbild', type: 'image', fields: [
            defineField({name: 'alt', title: 'Alt-text', type:'string'})
          ]}
        ]}),
    ]
  })