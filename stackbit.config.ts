import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  nodeVersion: '18',
  ssgName: 'hugo',

  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['site/content'],
      models: [
        {
          name: 'Homepage',
          type: 'page',
          filePath: 'site/content/_index.md',
          urlPath: '/',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'subtitle', type: 'string' },
            { name: 'image', type: 'image' },
            {
              name: 'blurb',
              type: 'object',
              fields: [
                { name: 'heading', type: 'string' },
                { name: 'text', type: 'text' }
              ]
            },
            {
              name: 'intro',
              type: 'object',
              fields: [
                { name: 'heading', type: 'string' },
                { name: 'text', type: 'text' }
              ]
            },
            {
              name: 'products',
              type: 'list',
              items: {
                type: 'object',
                fields: [
                  { name: 'image', type: 'image' },
                  { name: 'text', type: 'text' }
                ]
              }
            },
            {
              name: 'values',
              type: 'object',
              fields: [
                { name: 'heading', type: 'string' },
                { name: 'text', type: 'text' }
              ]
            }
          ]
        },
        {
          name: 'About',
          type: 'page',
          filePath: 'site/content/about/index.md',
          urlPath: '/about',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'body', type: 'markdown' }
          ]
        },
        {
          name: 'Services',
          type: 'page',
          filePath: 'site/content/services/index.md',
          urlPath: '/services',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'body', type: 'markdown' }
          ]
        },
        {
          name: 'Contact',
          type: 'page',
          filePath: 'site/content/contact/index.md',
          urlPath: '/contact',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'body', type: 'markdown' }
          ]
        }
      ]
    })
  ]
});
