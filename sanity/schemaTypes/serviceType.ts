import {defineField, defineType} from 'sanity'


export const serviceType = defineType({
    name: 'service',
    title: 'Service',
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