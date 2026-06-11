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
      defineField({name: 'alerts', title: 'Notis Lista', type: 'array', of: [
        defineField({name: 'notifications', title: 'Notis', type: 'object', preview:{
          select: {title: 'title_sv'},
          prepare({title}) {
            return {title}
          }},
         fields: [
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
          defineField({name: 'roles', title: 'Rollar', type: 'array', description: 'Välj "Hemsida" för att skicka till alla besökare på webbplatsen, oavsett roll.', options: {list: ['hemsida','scout', 'förälder', 'ledare']}, of: [{type: 'string'}]}),
          defineField({name: 'groups', title: 'Grupper', type: 'array', options: {list: 
            ['spårarscouter', 'upptäckarscouter', 'äventyrarscouter', 'utmanarscouter', 'familjescouter']}, of: [{type: 'string'}]}),
          defineField({name: 'expiry', title: 'Utgångsdatum', type: 'date'})
        ]}),
      ]})
    ]
  })