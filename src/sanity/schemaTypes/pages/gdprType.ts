import { defineField, defineType } from 'sanity'

export const gdpr =
  defineType({
    name:'gdpr', 
    title: 'GDPR', 
    type: 'document',
    preview: {
      prepare() {
        return {title: "GDPR"}
      }
    },
    fields: [
      defineField({name: 'gdpr_section', title: 'GDPR Info', type: 'object', fields: [
        defineField({name: 'title_se', title: 'Titel (SE)', type:'string'}),
        defineField({name: 'title_en', title: 'Titel (EN)', type:'string'}),
      ]}),
      defineField({name: 'history_layout', title: 'Innehåll', type: 'layout'})
    ]
  })