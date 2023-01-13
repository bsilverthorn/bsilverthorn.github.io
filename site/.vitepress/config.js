import { defineConfig } from 'vitepress';
import imageFigures from 'markdown-it-image-figures';
import markdownItFootnote from 'markdown-it-footnote';

/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    title: 'Bryan Silverthorn',
    lang: 'en-US',
    appearance: false,
    head: [
        [
            'script',
            { src: 'https://platform.twitter.com/widgets.js', 'defer': true },
        ],
    ],
    markdown: {
        config: (md) => {
            md.use(imageFigures, {
                figcaption: 'title',
                copyAttrs: '^class$',
            });
            md.use(markdownItFootnote);
        },
    },
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
                        { text: 'The AI product landscape', link: '/posts/2023-01-ai-product-landscape/' },
                    ]
                },
                {
                    text: '2022',
                    collapsible: true,
                    collapsed: true,
                    items: [
                        { text: 'AI research could use toys', link: '/posts/2022-12-diffusion-grid/' },
                    ]
                }
            ],
       },
    },
};

export default defineConfig(config);
