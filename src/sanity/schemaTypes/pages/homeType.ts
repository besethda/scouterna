import { defineField, defineType } from 'sanity'

export const homeType =
  defineType({
    name: 'home',
    title: 'Hemsida',
    type: 'document',
    description: 'Hemsida data',
    preview: {
      prepare() {
        return {title: "Hemsida"}
      }
    },
    fields: [
      defineField({name: 'homeHero', title: 'Hemsida Hero', type:'hero'}),
      defineField({name: 'homeCardWithImage', title: 'Hemsida bild kort', type:'cardWithImage'}),
      defineField({name: 'welcomeMessage', title: 'Välkomst Sektion', type: 'object', fields: [
        defineField({name: 'title_se', title: 'Välkomst titel (SE)', type:'string'}),
        defineField({name: 'title_en', title: 'Välkomst titel (EN)', type:'string'}),
        defineField({name: 'text_sv', title: 'Välkomst text (SV)', type:'string'}),
        defineField({name: 'text_en', title: 'Välkomst text (EN)', type:'string'}),
        defineField({name: 'image', title: 'Välkomst bild', type:'image', fields: [
          defineField({name: 'alt', title: 'Bild titel', type:'string'}),
        ]}),
      ]}),
      defineField({name: 'grid_section', title: 'Grid Box Sektion', type:'object', fields: [
        ({name: 'title', title: 'Titel', type: 'string'}),
        ({name: 'box_1', title: 'Grid Box 1', type: 'gridInfoBox'}),
        ({name: 'box_2', title: 'Grid Box 2', type: 'gridInfoBox'}),
        ({name: 'box_3', title: 'Grid Box 3', type: 'gridInfoBox'}),
        ({name: 'box_4', title: 'Grid Box 4', type: 'gridInfoBox'}),
      ]}),
      defineField({name: 'image_grid', title: 'Bild grid', type:'object', fields: [
        defineField({name: 'title_se', title: 'Titel (SE)', type:'string'}),
        defineField({name: 'title_en', title: 'Titel (EN)', type:'string'}),
        defineField({name: 'image_box_1', title: 'Bild box 1', type: 'gridImageBox'}),
        defineField({name: 'image_box_2', title: 'Bild box 2', type: 'gridImageBox'}),
        defineField({name: 'image_box_3', title: 'Bild box 3', type: 'gridImageBox'})
      ]}),
      defineField({name: 'group_info', title: 'Grupp Info', type: 'object', fields: [
        defineField({name: 'title_se', title: 'Titel (SE)', type:'string'}),
        defineField({name: 'title_en', title: 'Titel (EN)', type:'string'}),
        defineField({name: 'text_sv', title: 'Text (SV)', type:'string'}),
        defineField({name: 'text_en', title: 'Text (EN)', type:'string'}),
      ]})

    ]
  })