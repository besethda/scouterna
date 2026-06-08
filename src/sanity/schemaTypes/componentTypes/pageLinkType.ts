import { defineField, defineType } from 'sanity'

export const pageLinkType =
  defineType({name: 'pageLink', title: 'Länk typ', type: 'string', options: {
  list: [
    {title: 'Hemsida', value: '/'},
    {title: 'Bli Sjöscout', value: '/join/become-a-scout'},
    {title: 'FAQ', value: '/join/faq'},
    {title: 'Avdelninsstruktur', value: '/groups'},
    {title: 'Livet som sjöscout', value: '/what-we-do/lifestyle'},
    {title: 'Våra båtar', value: '/what-we-do/boats'},
    {title: 'Våra scoutstugor', value: '/what-we-do/cabins'},
    {title: 'Myset', value: '/what-we-do/cabins/myset'},
    {title: 'Ruffen', value: '/what-we-do/cabins/ruffen'},
    {title: 'Information', value: '/members/information'},
    {title: 'HSS flytvästpolicy', value: '/members/safety'},
    {title: 'Historia', value: '/about-us/history'},
    {title: 'Kontact', value: '/about-us/contact'},
    {title: 'GDPR', value: '/about-us/gdpr'},
  ]
}})