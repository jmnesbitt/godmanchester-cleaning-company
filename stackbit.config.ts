import { defineStackbitConfig, FileSystemContentSource } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'hugo',

  contentSources: [
    new FileSystemContentSource({
      name: 'content',
      path: 'site/content',
      models: [
        {
          name: 'homepage',
          label: 'Homepage',
          filePathPattern: '_index.md',
          type: 'page',
          fields: [
            { name: 'title', type: 'string', label: 'Title' },
            { name: 'subtitle', type: 'string', label: 'Subtitle' },
            { name: 'image', type: 'image', label: 'Hero Image' },
            {
              name: 'blurb',
              type: 'object',
              label: 'Blurb',
              fields: [
                { name: 'heading', type: 'string', label: 'Heading' },
                { name: 'text', type: 'text', label: 'Text' }
              ]
            },
            {
              name: 'intro',
              type: 'object',
              label: 'Intro',
              fields: [
                { name: 'heading', type: 'string', label: 'Heading' },
                { name: 'text', type: 'text', label: 'Text' }
              ]
            },
            {
              name: 'products',
              type: 'list',
              label: 'Products',
              items: {
                type: 'object',
                fields: [
                  { name: 'image', type: 'image', label: 'Image' },
                  { name: 'text', type: 'text', label: 'Text' }
                ]
              }
            },
            {
              name: 'values',
              type: 'object',
              label: 'Values',
              fields: [
                { name: 'heading', type: 'string', label: 'Heading' },
                { name: 'text', type: 'text', label: 'Text' }
              ]
            }
          ]
        }
      ]
    })
  ]
});
