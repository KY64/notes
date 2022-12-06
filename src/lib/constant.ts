import path from 'path';

const ROOT_DIR = path.resolve(import.meta.url.replace('file://', ''), '../../../../');

export const CONSTANT = {
	ROOT_DIR: ROOT_DIR,
	POST_DIR: path.join(ROOT_DIR, 'posts'),
	ASCIIDOC_FORMAT: '.adoc'
};
