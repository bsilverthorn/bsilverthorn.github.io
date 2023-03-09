import { defineConfig } from 'vitepress';
import imageFigures from 'markdown-it-image-figures';
import markdownItFootnote from 'markdown-it-footnote';
import { faviconPath } from './faviconPath.mjs';

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    title: 'Bryan Silverthorn',
    lang: 'en-US',
    appearance: false,
    markdown: {
        config: (md) => {
            md.use(imageFigures, {
                figcaption: 'title',
                copyAttrs: '^class$',
            });
            md.use(markdownItFootnote);
        },
    },
    head: [
        [
            'link',
            {
                rel: 'alternate',
                type: 'application/rss+xml',
                href: '/feed.rss'
            }
        ],
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                href: faviconPath,
            }
        ],
    ],
    themeConfig: {
        nav: [
            { text: 'Contact', link: '/' },
            { text: 'Writing', link: '/posts/2023-01-ai-product-landscape/' },
        ],
        socialLinks: [
            { icon: 'linkedin', link: 'https://linkedin.com/in/bsilverthorn/' },
            { icon: 'twitter', link: 'https://twitter.com/bcsilverthorn/' },
            { icon: 'github', link: 'https://github.com/bsilverthorn/' },
        ],
        sidebar: { 
            '/posts/': [
                {
                    text: '2023',
                    collapsible: true,
                    items: [
                        { text: 'Can AI write your unit tests?', link: '/posts/2023-03-generative-ai-generating-tests/' },
                        { text: 'The AI product landscape', link: '/posts/2023-01-ai-product-landscape/' },
                    ]
                },
                {
                    text: '2022',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'More toys for AI research', link: '/posts/2022-12-diffusion-grid/' },
                    ]
                }
            ],
       },
    },
};

export default defineConfig(config);
