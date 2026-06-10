import { defineField, defineType } from 'sanity'

export const group =
  defineType({
    name: 'group', 
    title: 'Grupp', 
    type: 'document',
    preview: {
      prepare() {
        return {title: "Grupp"}
      }
    },
    fields: [
      defineField({name: 'groups', title: 'Grupplista', type: 'array', of: [
        defineField({name: 'single_group', title: 'Singel Grupp', type: 'object', fields: [
          defineField({name: 'name', title: 'Namn', type: 'string', readOnly: true}),
          defineField({name: 'name_slug', title: 'Slug', type: 'string', hidden: true}),
          defineField({name: 'groups', title: 'Grupp Info', type: 'object', fields: [
            defineField({name: 'day_sv', title: 'Dag (SV)', type: 'string'}),
            defineField({name: 'day_en', title: 'Dag (EN)', type: 'string'}),
            defineField({name: 'place_sv', title: 'Plats (SV)', type: 'string'}),
            defineField({name: 'place_en', title: 'Plats (EN)', type: 'string'}),
            defineField({name: 'image', title: 'Bild', type: 'image', fields: [
              defineField({name: 'alt', title: 'Alt-text', type: 'string'}),
            ]}),
          ]}),
          defineField({name: 'leader', title: 'Avdelningsledare', type: 'object', fields: [
            defineField({name: 'text_object', title: 'Text Sektion', type: 'object', fields: [
              defineField({name: 'text_sv_array', title: 'SV text', type: 'array', of: [
                defineField({name: 'text_sv', title: 'Text (SV)', type: 'block',
                styles: [{title: 'Normal', value: 'normal'}, {title: 'H3', value: 'h3'}], 
                lists : [],  
                marks: {decorators: []}
              })
              ]}),
              defineField({name: 'text_en_array', title: 'EN text', type: 'array', of: [
                defineField({name: 'text_en', title: 'Text (EN)', type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}, {title: 'H3', value: 'h3'}], 
                  lists : [],  
                  marks: {decorators: []}
                })
              ]}),
              defineField({name: 'image', title: 'Bild', type: 'image', fields: [
              defineField({name: 'alt', title: 'Alt-text', type: 'string'}),
            ]}),
          ]})
        ]
      })
      ]})
    ]})  
]})