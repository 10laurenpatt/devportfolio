import {defineField, defineType} from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string'
        }),
         defineField({
            name: 'url',
            title: 'URL',
            type: 'url'
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