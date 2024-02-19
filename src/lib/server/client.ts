import { Client } from '@notionhq/client';
import { env } from '$env/dynamic/private';
import type { CapraEvent, NotionPropertiesObject } from '$lib/server/types';

const setup = () => {
	return new Client({
		auth: env.NOTION_TOKEN
	});
};

export const fetchAktivitetsoversiktFromNotion = async (): Promise<CapraEvent[]> => {
	const notion = setup();
	const response = await notion.databases.query({
		database_id: env.NOTION_AKTIVITETSOVERSIKT_DB_ID,
		sorts: [
			{
				property: 'Dato',
				direction: 'ascending'
			}
		]
	});

	return response.results.map((result) => {
		const properties = result.properties as NotionPropertiesObject;

		return {
			name: properties.Aktivitet?.title[0]?.plain_text ?? '',
			date: properties.Dato?.date?.start ?? '',
			description: properties.Beskrivelse?.rich_text[0]?.plain_text ?? ''
		};
	});
};
