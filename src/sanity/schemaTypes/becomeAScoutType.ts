import { defineField, defineType } from 'sanity'

export const becomeAScoutType =
  defineType({
    name: 'becomeAScout',
    title: 'Bli Sjöscout',
    type: 'document',
    description: 'Bli Sjöscout sida data',
    fields: [
      defineField({name: 'becomeAScoutHero', title: 'Bli Sjöscout Hero', type:'hero'})
    ]
  })