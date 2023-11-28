import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getDeltakereForEvent } from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	const deltakere = await getDeltakereForEvent(parseInt(params.eventId));

	if (deltakere) {
		return {
			deltakere: deltakere
		};
	}

	throw error(404, "Not found deltakere")
};