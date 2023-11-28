import { addDeltakerToEvent, getAllergiListe, getEventInformasjon } from '$lib/server/database';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const eventData = await getEventInformasjon(Number(params.eventId));
	const allergiListe = (await getAllergiListe()).map((allergiObject) => allergiObject.navn);
	return {
		eventData,
		allergiListe
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const navn = data.get('navn') as string;

		const result = await addDeltakerToEvent(request.params.eventId);

		return { success: true, payload: result };
	}
} satisfies Actions;
