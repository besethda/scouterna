import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './componentTypes/heroType'
import { homeType } from './pages/homeType'
import { cardWithImageType } from './componentTypes/cardWithImageType'
import { becomeAScoutType } from './pages/becomeAScoutType'
import { faqType } from './pages/faqType'
import { whiteGridBoxType } from './componentTypes/whiteGridBoxType'
import { whiteGridBoxContainerType } from './componentTypes/whiteGridBoxContainerType'
import { groups } from './pages/groups'
import { gridImageBox } from './componentTypes/gridImageBoxType'
import { gridInfoBox } from './componentTypes/gridInfoBox'
import { pageLinkType } from './componentTypes/pageLinkType'
import { layoutSection } from './componentTypes/layoutSectionType'
import { cardWithoutImageType } from './componentTypes/cardWithoutImageType'
import { lifestyleType } from './pages/lifestyleType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, homeType, faqType, becomeAScoutType, cardWithImageType, whiteGridBoxType, 
    whiteGridBoxContainerType, groups, gridImageBox, gridInfoBox, pageLinkType, layoutSection, 
    cardWithoutImageType, lifestyleType],
}
