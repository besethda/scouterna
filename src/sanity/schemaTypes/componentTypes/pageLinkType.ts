import { defineField, defineType } from 'sanity'

export const pageLinkType =
  defineType({name: 'pageLink', title: 'Länk typ', type: 'string', options: {
  list: [
    {title: 'Hemsida', value: 'home'},
    {title: 'Bli Sjöscout', value: 'become-a-scout'},
    {title: 'FAQ', value: 'faq'},
    {title: 'Avdelninsstruktur', value: 'groups'},
    {title: 'Livet som sjöscout', value: 'lifestyle'},
    {title: 'Våra båtar', value: 'boats'},
    {title: 'Våra scoutstugor', value: 'cabins'},
    {title: 'Myset', value: 'myset'},
    {title: 'Ruffen', value: 'ruffen'},
    {title: 'Information', value: 'information'},
    {title: 'HSS flytvästpolicy', value: 'safety'},
    {title: 'Historia', value: 'history'},
    {title: 'Kontact', value: 'contact'},
    {title: 'GDPR', value: 'gdpr'},
  ]
}})