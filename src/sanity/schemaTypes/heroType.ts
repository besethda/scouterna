import { defineField, defineType } from 'sanity'

export const heroType =
  defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
      defineField({name: 'hero_title_sv', title: 'Hero Titel (SV)', type: 'string', readOnly: true, hidden: true}),
      defineField({name: 'hero_title_en', title: 'Hero Titel (EN)', type: 'string', readOnly: true, hidden: true}),
      defineField({name: 'hero_subtitle01_sv', title: 'Hero SubTitel 1 (SV)', type: 'string'}),
      defineField({name: 'hero_subtitle01_en', title: 'Hero SubTitel 1 (EN)', type: 'string'}),
      defineField({name: 'hero_subtitle02_sv', title: 'Hero SubTitel 2 (SV)', type: 'string'}),
      defineField({name: 'hero_subtitle02_en', title: 'Hero SubTitel 2 (EN)', type: 'string'}),
      defineField({name: 'hero_description_sv', title: 'Hero Beskrivning (SV)', type: 'text'}),
      defineField({name: 'hero_description_en', title: 'Hero Beskrivning (EN)', type: 'text'}),
      defineField({name: 'button_sv', title: 'Button (SV)', type: 'string', readOnly: true, hidden: true}),
      defineField({name: 'button_en', title: 'Button (EN)', type: 'string', readOnly: true, hidden: true})
    ]
  })

  // So this will return the data like 

  // hero : {
  //   hero_subtitle01_sv: "client input",
  //   hero_subtitle01_en: "client input",
  //   hero_subtitle02_sv: "client input",
  //   hero_subtitle02_en: "client input",
  //   hero_description_sv: "client input",
  //   hero_description_en: "client input",
  // }