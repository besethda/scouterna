import { defineField, defineType } from 'sanity'

export const faqType =
  defineType({
    name: 'faqType',
    title: 'FAQ',
    type: 'document',
    preview: {
      prepare() {
        return {title: "FAQ"}
      }
    },
    fields: [
      defineField({name: 'questionCategories', title: 'Frågekategorier', type: 'array', of :[
        defineField({name: 'questionSection', title: 'Frågekategori', type: 'object', fields: [
          defineField({name: 'title_sv', title: 'Kategori Titel (SV)', type: 'string'}),
          defineField({name: 'title_en', title: 'Kategori Titel (EN)', type: 'string'}),
          defineField({name: 'questionList', title: 'Frågelista', type: 'array', of: [
            defineField({name: 'questions', title: 'Frågor', type: 'object', 
              preview: {
                prepare() {
                  return {title: "Fråga"}
                }
              },
              fields: [
              defineField({name: 'question_sv', title: 'Fråga (SV)', type: 'text'}),
              defineField({name: 'question_en', title: 'Fråga (EN)', type: 'text'}),
              defineField({name: 'text_sv_array', title: 'SV Svar', type: 'array', of: [
                defineField({name: 'text_sv', title: 'Text (SV)', type: 'block', 
                  styles: [{title: 'Normal', value: 'normal'}], lists : [],  marks: {decorators: []}}),
              ]}),
              defineField({name: 'text_en_array', title: 'EN Svar', type: 'array', of: [
              defineField({name: 'text_en', title: 'Text (EN)', type: 'block', 
                styles: [{title: 'Normal', value: 'normal'}], lists : [],  marks: {decorators: []}
              })
            ]})
          ]})
        ]})
      ]})
    ]})
]})