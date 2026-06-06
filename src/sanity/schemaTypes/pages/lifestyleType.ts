import { defineField, defineType } from 'sanity'

export const lifestyleType =
  defineType({
    name: 'lifestyle',
    title: 'Livet som Sjöscout',
    type: 'document',
    description: 'Livet som sjöscout data',
    preview: {
      prepare() {
        return {title: "Livet som Sjöscout"}
      }
    },
    fields: [
      defineField({name: 'lifestyle_hero', title: 'Livet som sjöscout Hero', type:'hero'}),
      defineField({name: 'lifestyle_card_with_image', title: 'Livet som sjöscout bild kort', type:'cardWithImage'}),
      defineField({name: 'lifestyle_grid', title: '', type: 'object', fields: [
        ({name: 'title_se', title: 'Titel (SE)', type: 'string'}),
        ({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
        ({name: 'box_1', title: 'Grid Box 1', type: 'whiteGridBox'}),
        ({name: 'box_2', title: 'Grid Box 2', type: 'whiteGridBox'}),
        ({name: 'box_3', title: 'Grid Box 3', type: 'whiteGridBox'}),
        ({name: 'box_4', title: 'Grid Box 4', type: 'whiteGridBox'}),
      ]}),
      defineField({name: 'grid_items', title: 'Grid Sektion', type: 'whiteGridBoxContainer'}),
      defineField({name: 'activities', title: 'Activiteter', type: 'object', fields: [
        ({name: 'title_se', title: 'Titel (SE)', type: 'string'}),
        ({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
        defineField({name: 'image', title: 'Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Bild titel', type: 'string'}),
        ]}),
        defineField({name: 'join_layout', title: 'Innehåll', type: 'layout'})
      ]})
    ]
  })