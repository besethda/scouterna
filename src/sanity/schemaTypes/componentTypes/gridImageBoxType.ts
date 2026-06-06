import { defineField, defineType } from 'sanity'

export const gridImageBox =
  defineType({
    name: 'gridImageBox', 
    title: 'Bild box', 
    type: 'object', 
    preview: {
      prepare() {
        return {title: "title_se"}
      }
    },
    fields: [
    defineField({name: 'title_se', title: 'Titel (SE)', type: 'string'}),
    defineField({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
    defineField({name: 'icon', title: 'Icon', type: 'image', fields: [
      defineField({name: 'alt', title: 'Icon titel', type: 'string'})
    ]}),
    defineField({name: 'image', title: 'Bild', type: 'image', fields: [
      defineField({name: 'alt', title: 'Bild titel', type: 'string'})
    ]}),
  ]})