import fs from 'fs';
import path from 'path';
import { CONSTANT } from '$lib/server/constant';
import asciidoc from 'asciidoctor';

export const parseDocument = (filename: string) => {
	if (
		fs.existsSync(filename) &&
		path.extname(filename) === CONSTANT.ASCIIDOC_FORMAT &&
		fs.statSync(filename).isFile()
	) {
		const doc = asciidoc().loadFile(filename, { safe: 'server' });
		return new Object({
			title: doc.getDocumentTitle(),
			attributes: doc.getAttributes(),
			content: doc.convert({ to_file: false, safe: 'server' }),
			doc: doc
		});
	}
};
