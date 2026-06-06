import { defineField, defineType } from 'sanity'

export const cabinsType =
  defineType({
    name: 'cabins',
    title: 'Scoutstugor',
    type: 'document',
    description: 'Scoutstugor data',
    preview: {
      prepare() {
        return {title: "Scoutstugor"}
      }
    },
    fields: [
      defineField({name: 'card_without_image', title: 'Livet som sjöscout bild kort', type:'cardWithoutImage'}),
      defineField({name: 'boats', title: 'Båt Lista', type: 'array', of: [
        defineField({name: 'single_boat', title: 'Singel båt', type: 'boatSection'})
      ]})
    ]
  })