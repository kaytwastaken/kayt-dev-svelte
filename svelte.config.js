// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],

	kit: {
		adapter: adapter({
			strict: false,
		}),
		prerender: {
			entries: ['/rss']
		}
	},

	extensions: ['.svelte', '.md'],
};

export default config;
