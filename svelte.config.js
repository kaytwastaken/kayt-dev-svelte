// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false,
			env: {
				host: '127.0.0.1',
				port: '3000',
				origin: 'https://kayt.dev',
			}
		})
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
				blog: 'src/routes/blog/blogLayout.svelte',
				projects: 'src/routes/projects/projectLayout.svelte'
			}
		})
	],
	onwarn: (warning, handler) => {
        const { code } = warning;
        if (code === "css-unused-selector")
            return;

        handler(warning);
	}

};
export default config;
