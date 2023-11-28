import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getDeltakereForEvent, getEventInformasjon } from '$lib/server/database';

export const load: PageServerLoad = async ({ params }) => {
	const deltakere = await getDeltakereForEvent(parseInt(params.eventId));
	const eventData = await getEventInformasjon(parseInt(params.eventId));

	if (deltakere) {
		return {
			deltakerInfo: deltakere,
			eventInfo: eventData
		};
	}

	throw error(404, 'Not found deltakere');
};
