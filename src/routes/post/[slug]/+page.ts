import type { PageLoad } from './$types';
import { parseDate } from '$lib/util';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	const post = await import(`../../../posts/${params.slug}.md`);
	const { title, tagline, create_date } = post.metadata;
	return {
		title,
		tagline,
		content: post.default,
		create_date: parseDate(create_date)
	};
};
