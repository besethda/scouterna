import { defineField, defineType } from 'sanity'

export const images =
  defineType({
    name:'images', 
    title: 'Webbplatsbilder', 
    type: 'document',
    preview: {
      prepare() {
        return {title: "Webbplatsbilder"}
      }
    },
    fields: [
      defineField({name: 'home_images', title: 'Hem Bilder', type: 'object', fields: [
        defineField({name: 'home_hero_mobile', title: 'Hem Huvudbild Mobile', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'home_hero_desktop', title: 'Hem Huvudbild Desktop', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]})
      ]}),
      defineField({name: 'join_images', title: 'Bli Sjöscout Bilder', type: 'object', fields: [
        defineField({name: 'join_hero_mobile', title: 'Bli Sjöscout Huvudbild Mobile', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'join_hero_desktop', title: 'Bli Sjöscout Huvudbild Desktop', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image_1', title: 'Scoutlivet inom HSS', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image_2', title: 'Ta Steget', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'lifestyle_images', title: 'Livet som Sjöscout Bilder', type: 'object', fields: [
        defineField({name: 'lifestyle_hero_mobile', title: 'Livet som Sjöscout Huvudbild Mobile', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'lifestyle_hero_desktop', title: 'Livet som Sjöscout Huvudbild Desktop', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]})
      ]}),
      defineField({name: 'cabin_images', title: 'Scoutstugor Bilder', type: 'object', fields: [
        defineField({name: 'ruffen', title: 'Ruffen', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'myset', title: 'Myset', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]})
    ]})