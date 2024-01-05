import {
  defineArrayMember,
  defineField,
  defineType,
} from '@sanity-typed/types';

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' as const },
        { title: 'H1', value: 'h1' as const },
        { title: 'H2', value: 'h2' as const },
        { title: 'H3', value: 'h3' as const },
        { title: 'H4', value: 'h4' as const },
        { title: 'Quote', value: 'blockquote' as const },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' as const },
        { title: 'Bar', value: 'bar' as const },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' as const },
          { title: 'Emphasis', value: 'em' as const },
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              defineField({
                name: 'href',
                type: 'url',
                validation: Rule => Rule.required(),
              }),
            ],
          }),
          defineArrayMember({
            name: 'qux',
            type: 'object',
            title: 'Qux',
            fields: [
              defineField({
                name: 'value',
                type: 'string',
                validation: Rule => Rule.required(),
              }),
            ],
          }),
        ],
      },
    }),
  ],
});
