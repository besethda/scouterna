import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './heroType'
import { homeType } from './homeType'
import { cardWithImageType } from './cardWithImageType'
import { becomeAScoutType } from './becomeAScoutType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroType, homeType, becomeAScoutType, cardWithImageType],
}
