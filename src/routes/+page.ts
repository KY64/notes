import type { PageLoad } from './$types';
import posts from '$lib/posts.json';
import { parseDate } from '$lib/util';

export const prerender = true;

export const load: PageLoad = () => {
	return posts.map((value) => {
		value.create_date = parseDate(value.create_date);
		return value;
	});
};
