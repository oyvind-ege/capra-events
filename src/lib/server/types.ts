export type CapraEvent = {
	name: string;
	date: NotionDateObject;
	description: string;
};

type NotionDateObject = {
	start: string;
	end?: string;
	time_zone?: string;
};

/* eslint-disable  @typescript-eslint/no-unused-vars */
type NotionColumnType =
	| 'rich_text'
	| 'checkbox'
	| 'created_by'
	| 'created_time'
	| 'date'
	| 'email'
	| 'files'
	| 'formula'
	| 'last_edited_by'
	| 'last_edited_time'
	| 'multi_select'
	| 'number'
	| 'people'
	| 'phone_number'
	| 'relation'
	| 'rich_text'
	| 'rollup'
	| 'select'
	| 'status'
	| 'title'
	| 'url';

type CapraEventStatus = 'Tentativt' | 'Skal gjennomføres' | 'Gjennomført' | 'Arkivert';

export type CapraEventNotionProperties = {
	Id: {
		unique_id: { prefix: string; number: number };
	};
	Aktivitet: {
		title: { plain_text: string }[];
	};
	Beskrivelse: { rich_text: { plain_text: string }[] };
	Dato: {
		date: NotionDateObject;
	};
	'Åpen for eksterne': {
		checkbox: boolean;
	};
	'Klar for publisering': {
		checkbox: boolean;
	};
	Status: {
		status: {
			name: CapraEventStatus;
		};
	};
};

/*
*
Aktivitet
:
{id: 'title', type: 'title', title: Array(1)}
Ansvarlig team
:
{id: '%3AU%3CU', type: 'relation', relation: Array(0), has_more: false}
Beskrivelse
:
{id: 'leeA', type: 'rich_text', rich_text: Array(0)}
Created by
:
{id: 'mHFg', type: 'created_by', created_by: {…}}
Dato
:
{id: '_z%7Bo', type: 'date', date: {…}}
Gjennomført
:
{id: '%7Ccd%3B', type: 'checkbox', checkbox: false}
Klar for publisering
:
{id: 'HRp_', type: 'checkbox', checkbox: false}
Planlagt i måned
:
{id: 'NxFx', type: 'select', select: {…}}
Status
:
{id: '%3AE%5BO', type: 'status', status: {…}}
Åpen for eksterne
:
{id: 'Uo%40W', type: 'checkbox', checkbox: true}
Årshjul / Roadmap
:
{id: 'ezco', type: 'multi_select', multi_select: Array(4)}
*  */
