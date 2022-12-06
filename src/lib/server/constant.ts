import path from 'path';
import { fileURLToPath } from 'url';

const ROOT_DIR = path.resolve(fileURLToPath(import.meta.url), '../../../../../');

export const CONSTANT = {
	ROOT_DIR: ROOT_DIR,
	POST_DIR: path.join(ROOT_DIR, 'posts'),
	ASCIIDOC_FORMAT: '.adoc'
};
