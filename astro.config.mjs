// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import partytown from '@astrojs/partytown';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	site: 'https://hobenakicoffee.com',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
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
	adapter: node({
		mode: 'standalone',
	}),
});
