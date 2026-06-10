import { defineField, defineType } from 'sanity'

export const union =
  defineType({
    name: 'union', 
    title: 'Kårstämma', 
    type: 'document',
    preview: {
      prepare() {
        return {title: "Kårstämma"}
      }
    },
    fields: [
      defineField({name: 'history_section', title: 'Kårstämma Sektion', type: 'array', of: [
        defineField({name: 'file_data', title: 'dokument information', type: 'object', fields: [
          defineField({name: 'file', title: 'dokument ', type: 'file'}),
          defineField({name: 'name', title: 'Länk Namn', type: 'string'})
        ]})
      ]}),
    ]
  })