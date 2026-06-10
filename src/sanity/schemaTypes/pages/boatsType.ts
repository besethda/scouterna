import { defineField, defineType } from 'sanity'

export const boatsType =
  defineType({
    name: 'boats',
    title: 'Våra båtar',
    type: 'document',
    description: 'Våra båtar data',
    preview: {
      prepare() {
        return {title: "Våra båtar"}
      }
    },
    fields: [
      defineField({name: 'boats', title: 'Båtlista', type: 'array', of: [
        defineField({name: 'single_boat', title: 'Singel båt', type: 'boatSection'})
      ]})
    ]
  })