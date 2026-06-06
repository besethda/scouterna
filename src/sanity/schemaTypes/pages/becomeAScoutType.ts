import { defineField, defineType } from 'sanity'

export const becomeAScoutType =
  defineType({
    name: 'becomeAScout',
    title: 'Bli Sjöscout',
    type: 'document',
    description: 'Bli Sjöscout sida data',
    preview: {
      prepare() {
        return {title: "Bli Sjöscout"}
      }
    },
    fields: [
      defineField({name: 'hero', title: 'Bli Sjöscout Hero', type: 'hero'}),
      defineField({name: 'grid_items', title: 'Grid Sektion', type: 'whiteGridBoxContainer'}),
      defineField({name: 'join_photo_section', title: 'Innehåll huvud', type: 'object', fields: [
        defineField({name: 'title_sv', title: 'Titel (SV)', type: 'string'}),
        defineField({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
        defineField({name: 'text_sv', title: 'Text (SV)', type: 'string'}),
        defineField({name: 'text_en', title: 'Text (EN)', type: 'string'}),
        defineField({name: 'image', title: 'Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Bild titel', type: 'string'}),
        ]})
      ]}),
      defineField({name: 'join_layout', title: 'Innehåll', type: 'layout'})
    ]})