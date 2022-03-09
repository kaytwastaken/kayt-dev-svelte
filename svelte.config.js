import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'],
	
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import './src/style/app.scss';`
			} 
		}),
		mdsvex({
			extensions: ['.md'],
			layout: {
				blog: 'src/routes/blog/_blog.svelte'
			}
		})
	],

};
export default config;
