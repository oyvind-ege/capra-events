import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchAktivitetsoversiktFromNotion } from "$lib/server/client";

export const load: PageServerLoad = async () => {
	const aktivitetsoversikt = await fetchAktivitetsoversiktFromNotion();

	if (aktivitetsoversikt) {
		return {
			aktivitetsoversikt
		};
	}

	throw error(404, 'Not found eventer');
};
