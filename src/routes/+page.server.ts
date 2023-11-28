import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAlleEventer } from '$lib/server/database';

export const load: PageServerLoad = async () => {
	const eventer = await getAlleEventer();

	if (eventer) {
		return {
			eventer
		};
	}

	throw error(404, 'Not found eventer');
};
