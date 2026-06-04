import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './heroType'
import { homeType } from './homeType'
import { cardWithImageType } from './cardWithImageType'
import { becomeAScoutType } from './becomeAScoutType'
import { faqType } from './faqType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, homeType, faqType, becomeAScoutType, cardWithImageType],
}
