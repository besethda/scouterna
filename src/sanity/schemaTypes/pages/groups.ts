import { defineField, defineType } from 'sanity'

export const groups =
  defineType({
    name:'group', 
    title: 'Gruppar', 
    type: 'document',
    preview: {
      prepare() {
        return {title: "Gruppar"}
      }
    },
    fields: [
    defineField({name: 'title_se', title: 'Grupps Titel (SE)', type: 'string'}),
    defineField({name: 'title_en', title: 'Grupps Titel (EN)', type: 'string'}),
    defineField({name: 'text_se', title: 'Grupps Text (SE)', type: 'text'}),
    defineField({name: 'text_en', title: 'Grupps Text (EN)', type: 'text'}),
    defineField({name: 'group_array', title: 'Gruppar', type: 'array', of: [
      defineField({name: 'group_object', title: 'Singel Grupp', type: 'object', fields: [
        defineField({name: 'group_name', title: 'Grupp Namn', type:'string'}),
        defineField({name: 'ages_se', title: 'Åldersgrupper (SV)', type:'string', placeholder: '8-9 år'}),
        defineField({name: 'ages_en', title: 'Åldersgrupper (EN)', type:'string', placeholder: '8-9 years'}),
        defineField({name: 'icon', title: 'Icon', type:'image', fields: [
          defineField({name: 'alt', title: 'Icon Titel', type: 'string'})
        ]}),
        defineField({name: 'place_se', title: 'Mötesplats (SV)', type:'string', placeholder: 'Ruffen'}),
        defineField({name: 'place_en', title: 'Mötesplats (EN)', type:'string', placeholder: 'Ruffen'}),
        defineField({name: 'day_se', title: 'Dag (SV)', type:'string', placeholder: 'fredag'}),
        defineField({name: 'day_en', title: 'Dag (EN)', type:'string', placeholder: 'friday'}),
        defineField({name: 'time_se', title: 'Tid (SV)', type:'string', placeholder: '18:00'}),
        defineField({name: 'time_en', title: 'Tid (EN)', type:'string', placeholder: '18:00'}),
        defineField({name: 'primary_color', title: 'Primärfärg', type:'string', placeholder: '#fff'}),
        defineField({name: 'secondary_color', title: 'Sekundärfärg', type:'string', placeholder: '#fff'}),
        defineField({name: 'image', title: 'Bild', type:'image', fields: [
          defineField({name: 'alt', title: 'Bild titel', type: 'string'})
        ]}),
        defineField({name: 'button_link', title: 'Button PDF/Fil', type: 'file'}),
        defineField({name: 'button_text_se', title: 'Button Text (SV)', type: 'string'}),
        defineField({name: 'button_text_en', title: 'Button Text (EN)', type: 'string'}),
        defineField({name: 'description_se', title: 'Beskrivning (SE)', type: 'text'}),
        defineField({name: 'description_en', title: 'Beskrivning (EN)', type: 'text'}),
        defineField({name: 'text_array', title:'Text Sektioner', type:'array', of: [
          defineField({name: 'text_object', title: '', type: 'object', fields: [
            defineField({name:'title_sv', title: 'Titel (SV)', type: 'string'}),
            defineField({name:'title_en', title: 'Titel (EN)', type: 'string'}),
            defineField({name: 'text_sv_array', title: 'SV text', type: 'array', of: [
              defineField({name: 'text_sv', title: 'Text (SV)', type: 'block',
              styles: [{title: 'Normal', value: 'normal'}, {title: 'H2', value: 'h2'}], 
              lists : [{title: 'Bulleted', value: 'bullet'}],  
              marks: {decorators: [{title: 'Strong', value: 'strong'}]}
            })
            ]}),
            defineField({name: 'text_en_array', title: 'EN text', type: 'array', of: [
              defineField({name: 'text_en', title: 'Text (EN)', type: 'block',
                styles: [{title: 'Normal', value: 'normal'}, {title: 'H2', value: 'h2'}], 
                lists : [{title: 'Bulleted', value: 'bullet'}],  
                marks: {decorators: [{title: 'Strong', value: 'strong'}]}
              })
          ]})
        ]}),
        defineField({name: 'manager_section', title: 'Avdelningsledare', type: 'object', fields: [
          defineField({name: 'title_se', title: 'Grupps Titel (SE)', type: 'string'}),
          defineField({name: 'title_en', title: 'Grupps Titel (EN)', type: 'string'}),
          defineField({name: 'group_layout', title: 'Innehåll', type: 'layout'})
        ]}),  
      ]})
    ]})   
  ]})
]})