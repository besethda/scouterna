import { defineField, defineType } from 'sanity'

export const alert =
  defineType({
    name: 'alert', 
    title: 'Notis', 
    type: 'document',
    preview: {
      prepare() {
        return {title: "Notiser"}
      }
    },
    fields: [
      defineField({name: 'notifications', title: 'Notis', type: 'object', fields: [
        defineField({name: 'type', title: 'Typ', type: 'string', options: {
          list: [
            { title: 'Notis', value: 'notis'},
            { title: 'Obs!', value: 'obs'},
          ]
        }}),
        defineField({name: 'title_sv', title: 'Titel (SV)', type: 'string'}),
        defineField({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
        defineField({name: 'text_sv', title: 'Text (SV)', type: 'text'}),
        defineField({name: 'text_en', title: 'Text (EN)', type: 'text'}),
        defineField({name: 'expiry', title: 'Utgångsdatum', type: 'date'})
      ]}),
    ]
  })