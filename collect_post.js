import fs from 'fs';
import path from 'path';
import { compile } from 'mdsvex';
import { SLUG } from './svelte.config.js';

const collect_post = async () => {
	const POST_DIR = './src/posts';
	const POST_COLLECTION_FILE = './src/lib/posts.json';

	const files = fs.readdirSync(POST_DIR).filter((filename) => path.extname(filename) == '.md');
	const post_list = [];

	for (let filename of files) {
		const filepath = path.join(POST_DIR, filename);
		const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
		const markdown = await compile(content);
		markdown.data.fm.slug = `${SLUG + path.basename(filename, '.md')}`;
		post_list.push(markdown.data.fm);
	}

	post_list.sort(
		(current, next) => new Date(`${next.create_date}`) - new Date(`${current.create_date}`)
	);

	fs.writeFileSync(POST_COLLECTION_FILE, JSON.stringify(post_list));
};

collect_post();
