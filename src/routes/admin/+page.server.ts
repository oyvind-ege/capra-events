import { fail } from '@sveltejs/kit';

import { createEvent } from '$lib/server/database';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const tittel = data.get('tittel') as string;
		const beskrivelse = data.get('beskrivelse') as string;
		const dato = new Date(data.get('dato') as string);
		const tidspunkt = (data.get('tidspunkt') as string) || undefined;

		if (tidspunkt) {
			const tidsSplit = tidspunkt?.split(':');

			dato.setUTCHours(Number(tidsSplit[0]));
			dato.setMinutes(Number(tidsSplit[1]));
		}

		if (!dato) {
			return fail(400, { dato, missing: true });
		}

		if (!tittel) {
			return fail(400, { tittel, missing: true });
		}

		if (!beskrivelse) {
			return fail(400, { beskrivelse, missing: true });
		}

		if (!tidspunkt) {
			return fail(400, { tidspunkt, missing: true });
		}

		const result = await createEvent({ tittel, beskrivelse, dato });

		return { success: true, payload: result };
	}
} satisfies Actions;
