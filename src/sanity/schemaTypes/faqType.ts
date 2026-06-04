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
            defineField({name: 'questions', title: 'Frågor', type: 'object', fields: [
              defineField({name: 'question_sv', title: 'Fråga (SV)', type: 'text'}),
              defineField({name: 'question_en', title: 'Fråga (EN)', type: 'text'}),
              defineField({name: 'answer_sv', title: 'Svar (SV)', type: 'text'}),
              defineField({name: 'answer_en', title: 'Svar (EN)', type: 'text'}),
            ]})
          ]})
        ]})
      ]})
    ]
  })