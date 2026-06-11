import { defineField, defineType } from 'sanity'

export const history =
  defineType({
    name:'history', 
    title: 'Historia', 
    type: 'document',
    preview: {
      prepare() {
        return {title: "Historia"}
      }
    },
    fields: [
      defineField({name: 'history_layout', title: 'Innehåll', type: 'layout'}),
      defineField({name: 'images', title: 'Gammal båt lista', type: 'array', of: [
          defineField({name: 'image', title: 'Gammal båt bild', type: 'image', fields: [
            defineField({name: 'alt', title: 'Alt-text', type: 'string'}),
            defineField({name: 'description_sv', title: 'Beskrivningen (SV)', type: 'string'}),
            defineField({name: 'description_en', title: 'Beskrivningen (EN)', type: 'string'}),
          ]})
        ]})
      ]})