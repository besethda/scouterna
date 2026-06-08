import { type SchemaTypeDefinition } from 'sanity'
import { faqType } from './pages/faqType'
import { groups } from './pages/groups'
import { pageLinkType } from './componentTypes/pageLinkType'
import { layoutSection } from './componentTypes/layoutSectionType'
import { boatsType } from './pages/boatsType'
import { boatSection } from './componentTypes/boatSectionType'
import { history } from './pages/historyType'
import { images } from './pages/imagesType'
import { gdpr } from './pages/gdprType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faqType, groups, pageLinkType, layoutSection, boatSection, boatsType, history, images, gdpr],
}
