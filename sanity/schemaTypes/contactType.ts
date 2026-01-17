import { defineField, defineType } from "sanity";


export const contactType = defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{type: 'block'}]
        })
    ]

})