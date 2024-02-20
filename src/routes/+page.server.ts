import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fetchAktivitetsoversiktFromNotion, fetchDeltakere } from '$lib/server/client';

export const load: PageServerLoad = async () => {
	const aktiviteter = await fetchAktivitetsoversiktFromNotion();
	const deltakerliste = await fetchDeltakere('ea4c485f-53a0-4799-8215-a77118cc6c7e');

	if (aktiviteter) {
		return {
			aktiviteter
		};
	}

	throw error(404, 'Ingen aktiviteter funnet');
};
