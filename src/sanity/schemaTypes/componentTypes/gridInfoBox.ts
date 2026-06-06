import { defineField, defineType } from 'sanity'

export const gridInfoBox =
  defineType({
    name:'gridInfoBox', 
    title: 'Grid Info Box', 
    type: 'object', 
    preview: {
      prepare() {
        return {title: "title_se"}
      }
    },
    fields: [
    defineField({name: 'title_se', title: 'Titel (SE)', type: 'string'}),
    defineField({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
    defineField({name: 'header_se', title: 'Huvud (SE)', type: 'string'}),
    defineField({name: 'header_en', title: 'Huvud (EN)', type: 'string'}),
    defineField({name: 'text_se', title: 'Text (SE)', type: 'text'}),
    defineField({name: 'text_en', title: 'Text (SE)', type: 'text'}),
    defineField({name: 'icon', title: 'Icon', type: 'image', fields: [
      defineField({name: 'alt', title: 'Bild titel', type: 'string'})
    ]}),
  ]})