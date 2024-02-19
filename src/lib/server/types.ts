export type CapraEvent = {
  name: string;
  date: string;
  description: string;
}

export type CapraEventProperties = {
  Aktivitet: {
    title: {plain_text: string}[]
  };
  Beskrivelse: {}
}
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
