// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex'
import * as fs from 'fs';

const posts = fs.readdirSync('./src/posts').map(post => {
	return '/blog/' + post.replace('.md', '')
})

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
			strict: false
		}),
		prerender: {
			entries: [...posts, '/rss']
		},
	},

	extensions: ['.svelte', '.md'],
};

export default config;
