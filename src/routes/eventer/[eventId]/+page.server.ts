import { getAllergiListe, getEventInformasjon } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const eventData = await getEventInformasjon(Number(params.eventId));
	const allergiListe = (await getAllergiListe()).map((allergiObject) => allergiObject.navn);
	return {
		eventData,
		allergiListe
	};
};
