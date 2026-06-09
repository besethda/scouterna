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
      defineField({name: 'history_section', title: 'Historia Info', type: 'object', fields: [
        defineField({name: 'title_se', title: 'Titel (SE)', type:'string'}),
        defineField({name: 'title_en', title: 'Titel (EN)', type:'string'}),
      ]}),
      defineField({name: 'history_layout', title: 'Innehåll', type: 'layout'})
    ]
  })