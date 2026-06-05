import { defineField, defineType } from 'sanity'

export const homeType =
  defineType({
    name: 'home',
    title: 'Hemsida',
    type: 'document',
    description: 'Hemsida data',
    preview: {
      prepare() {
        return {title: "Hemsida"}
      }
    },
    fields: [
      defineField({name: 'homeHero', title: 'Hemsida Hero', type:'hero'}),
      defineField({name: 'homeCardWithImage', title: 'Hemsida bild kort', type:'cardWithImage'})
    ]
  })