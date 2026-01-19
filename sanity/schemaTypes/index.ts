import { type SchemaTypeDefinition } from 'sanity'
import {projectType} from './projectType'
import {skillType} from './skillType'
import { heroType } from './heroType'
import { aboutType } from './aboutType'
import { contactType } from './contactType'
import { serviceType } from './serviceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, skillType, serviceType, heroType, aboutType, contactType],
}
