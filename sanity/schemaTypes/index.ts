import { type SchemaTypeDefinition } from 'sanity'
import {projectType} from './projectType'
import {skillType} from './skillType'
import { heroType } from './heroType'
import { aboutType } from './aboutType'
import { contactType } from './contactType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, skillType, heroType, aboutType, contactType],
}
