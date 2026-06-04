import { defineField, defineType } from 'sanity'

export const homeType =
  defineType({
    name: 'home',
    title: 'Hemsida',
    type: 'document',
    description: 'Hemsida data',
    fields: [
      defineField({name: 'homeHero', title: 'Hemsida Hero', type:'hero'})
    ]
  })