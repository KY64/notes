import path from 'path';
import fs from 'fs';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const POST_DIR = './src/posts';
export const SLUG = '/post/';
const posts = fs
	.readdirSync(POST_DIR)
	.filter((filename) => path.extname(filename) == '.md')
	.map((filename) => {
		if (path.extname(filename) == '.md') return `${SLUG + path.basename(filename, '.md')}`;
	});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess(),
		mdsvex({
			extension: '.md'
		})
	],

	kit: {
		alias: {
			$$: './src/components'
		},
		adapter: adapter(),
		prerender: {
			entries: posts
		}
	}
};

export default config;
