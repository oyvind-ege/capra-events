import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchAktivitetsoversiktFromNotion } from '$lib/server/client';

export const load: PageServerLoad = async () => {
	const aktiviteter = await fetchAktivitetsoversiktFromNotion();

	if (aktiviteter) {
		return {
			aktiviteter
		};
	}

	throw error(404, 'Ingen aktiviteter funnet');
};
