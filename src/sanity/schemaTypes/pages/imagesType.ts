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
        defineField({name: 'home_hero_mobile', title: 'Hem Hero Mobile', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'home_hero_desktop', title: 'Hem Hero Desktop', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image', title: 'Vågorna väntar Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image_2', title: 'HSS välkomnar alla Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'join_images', title: 'Bli Sjöscout Bilder', type: 'object', fields: [
        defineField({name: 'join_hero_mobile', title: 'Bli Sjöscout Hero Mobile', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'join_hero_desktop', title: 'Bli Sjöscout Hero Desktop', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image', title: 'Bli en del av HSS Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image_2', title: 'Scouting för ung som vuxen Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'lifestyle_images', title: 'Livet som Sjöscout Bilder', type: 'object', fields: [
        defineField({name: 'lifestyle_hero_mobile', title: 'Livet som Sjöscout Hero Mobile', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'lifestyle_hero_desktop', title: 'Livet som Sjöscout Hero Desktop', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image', title: 'Vågorna Väntar Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'card_image_2', title: 'Activiteter Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'cabin_images', title: 'Scoutstugor Bilder', type: 'object', fields: [
        defineField({name: 'ruffen', title: 'Ruffen', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
        defineField({name: 'myset', title: 'Myset', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'member_images', title: 'Medlem Bild', type: 'object', fields: [
        defineField({name: 'member', title: 'Medlem Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'safety_images', title: 'Flytvästpolicy Bild', type: 'object', fields: [
        defineField({name: 'safety', title: 'Flytvästpolicy Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'history_images', title: 'Historia Bild', type: 'object', fields: [
        defineField({name: 'history', title: 'Historia Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'contact_images', title: 'Kontakt Bild', type: 'object', fields: [
        defineField({name: 'contact', title: 'Kontakt Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
      defineField({name: 'gdpr_images', title: 'GDPR Bild', type: 'object', fields: [
        defineField({name: 'gdpr', title: 'GDPR Bild', type: 'image', fields: [
          defineField({name: 'alt', title: 'Alt-bild', type: 'string'})
        ]}),
      ]}),
    ]})