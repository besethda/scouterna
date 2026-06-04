
import { defineField, defineType } from 'sanity'

export const textType =
  defineType({
    title: 'textType',
    name: 'Text',
    type: 'array',
    of: [{type: 'block'}]
  })
