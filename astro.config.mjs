// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import partytown from '@astrojs/partytown';

import svelte from '@astrojs/svelte';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

const { SITE: site } = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
    // site: 'https://hobenakicoffee.com',
    site,

    integrations: [
        sitemap({
            i18n: {
                defaultLocale: 'bn',
                locales: {
                    en: 'en-US',
                    bn: 'bn-BD',
                },
            },
        }),
        robotsTxt(),
        partytown(),
        svelte(),
    ],

    output: 'server',

    adapter: vercel(),

    vite: {
        plugins: [tailwindcss()],
    },
});
