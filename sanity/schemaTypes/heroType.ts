import {defineField, defineType} from 'sanity'


export const heroType = defineType({
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        defineField({
            name: 'title1',
            type: 'string'
        }),
        defineField({
            name: 'title2',
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