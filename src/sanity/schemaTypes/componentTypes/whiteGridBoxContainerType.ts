import { defineField, defineType } from 'sanity'

export const whiteGridBoxContainerType =
  defineType({name:'whiteGridBoxContainer', title: 'Info Grid Box Sektion', type: 'object', fields: [
    ({name: 'title_se', title: 'Titel (SE)', type: 'string'}),
    ({name: 'title_en', title: 'Titel (EN)', type: 'string'}),
    ({name: 'box_1', title: 'Grid Box 1', type: 'whiteGridBox'}),
    ({name: 'box_2', title: 'Grid Box 2', type: 'whiteGridBox'}),
    ({name: 'box_3', title: 'Grid Box 3', type: 'whiteGridBox'}),
    ]})