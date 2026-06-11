import { defineField, defineType } from 'sanity'

export const layoutSection =
defineType({name: 'layout', title: 'Innehållssektion', type: 'object', fields: [
  defineField({name: 'scout_life', title: 'Scoutliv', type: 'array', of: [
    defineField({name: 'button', title: 'Button Länk', type: 'object', fields: [
      defineField({name: 'button_text_se', title: 'Button text (SE)', type: 'string'}),
      defineField({name: 'button_text_en', title: 'Button text (EN)', type: 'string'}),
      defineField({name: 'link_list', title: 'Länk typ', description: 'välja bara en länk typ för button', type: 'array', of: [
        defineField({name: 'link_object', title: 'Länk en sida', type: 'object', fields: [
          defineField({name: 'link', title: 'länk typ', type: 'pageLink'})
        ]}),
        defineField({name: 'url_object', title: 'Länk en url', type: 'object', fields: [
          defineField({name: 'external_url', title: 'Extern webbplats', type: 'string'}),
        ]}),
        defineField({name: 'file_object', title: 'Länk en fil', type: 'object', fields: [
        defineField({name: 'file', title: 'PDF/fil', type: 'file'})
        ]})
      ]})
    ]}),
    defineField({name: 'title_object', title: 'Titel Sektion', type: 'object', fields: [
      defineField({name: 'title_sv', title: 'Titel (SV)', type: 'string'}),
      defineField({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
    ]}),
    defineField({name: 'text_object', title: 'Text Sektion', type: 'object', fields: [
      defineField({name: 'text_sv_array', title: 'SV text', type: 'array', of: [
        defineField({name: 'text_sv', title: 'Text (SV)', type: 'block',
        styles: [{title: 'Normal', value: 'normal'}, {title: 'H3', value: 'h3'}], 
        lists : [{title: 'Bulleted', value: 'bullet'}],  
        marks: {decorators: [{title: 'Strong', value: 'strong'}]}
      })
      ]}),
      defineField({name: 'text_en_array', title: 'EN text', type: 'array', of: [
        defineField({name: 'text_en', title: 'Text (EN)', type: 'block',
          styles: [{title: 'Normal', value: 'normal'}, {title: 'H3', value: 'h3'}], 
          lists : [{title: 'Bulleted', value: 'bullet'}],  
          marks: {decorators: [{title: 'Strong', value: 'strong'}]}
        })
      ]})
    ]}),
  ]})
]})
