import {defineField, defineType} from 'sanity'


export const heroType = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{type: 'block'}]
        })
    ]
})