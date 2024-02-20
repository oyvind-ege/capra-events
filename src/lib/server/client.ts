import { Client } from '@notionhq/client';
import { env } from '$env/dynamic/private';
import type { CapraEvent, CapraEventNotionProperties, Deltaker } from '$lib/server/types';
import { isChildDatabaseBlock } from './utils/typeguards';

const setup = () => {
	return new Client({
		auth: env.NOTION_TOKEN
	});
};

export const fetchAktivitetsoversiktFromNotion = async (): Promise<CapraEvent[]> => {
	const notion = setup();

	const response = await notion.databases.query({
		database_id: env.NOTION_AKTIVITETSOVERSIKT_DB_ID,
		filter: {
			and: [
				{
					property: 'Åpen for eksterne',
					checkbox: {
						equals: true
					}
				},
				{
					property: 'Klar for publisering',
					checkbox: {
						equals: true
					}
				}
			]
		},
		// Henter kun visse kolonner
		// Dette er ID til disse kolonnene. Dette finner du ved notion.databases.retrieve(...), se på "id" feltet.
		filter_properties: ['title', 'ZxM%40', '_z%7Bo', 'leeA', '%3AE%5BO', 'iGWH'],
		sorts: [
			{
				property: 'Dato',
				direction: 'descending'
			}
		]
	});

	if (response.results.length < 1) {
		return [];
	}

	return response.results.map((result) => {
		const properties = result.properties as CapraEventNotionProperties;

		console.log('Properties', properties);

		console.log('Deltakerliste: ', properties.Deltakerliste.relation[0]);

		return {
			id: properties.ID?.unique_id?.number,
			name: properties.Aktivitet?.title[0]?.plain_text ?? '',
			date: properties.Dato?.date || { start: '' },
			description: properties.Beskrivelse?.rich_text[0]?.plain_text ?? '',
			deltakerlisteId: properties.Deltakerliste.relation[0].id ?? ''
		};
	});
};

/**
 * Under siden "Deltakerlister for arrangementer" ligger deltakerlistene for hvert arrangement. Disse er Pages.
 * Hvert arrangement har derfor sin Page, og hver slik Page har en underdatabase med deltakere.
 * Denne henter data fra denne Databasen.
 * https://www.notion.so/capra/a3cad9f19aa54982a7513464e23f9d47?v=30969d8a71894e34bd498d0e3826dcc3&pvs=4
 * @param deltakerlisteId - ID til siden under "Deltakerlister for arrangementer"
 */
export const fetchDeltakere = async (deltakerlisteId: string) => {
	const notion = setup();

	const res = await notion.blocks.children.list({ block_id: deltakerlisteId });

	if (res.results.length < 1) {
		return [];
	}

	const deltakerDatabase = res.results.filter((block) => isChildDatabaseBlock(block));

	const deltakerDatabaseId = deltakerDatabase[0].id;

	console.log('Deltakerdatabase:', deltakerDatabaseId);

	const datres = await notion.databases.query({
		database_id: deltakerDatabaseId
	});

	console.log('Deltakere:', datres.results);
};
