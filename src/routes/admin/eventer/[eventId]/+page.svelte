<script lang="ts">
	import type { PageData } from './$types';

	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	export let data: PageData;
</script>

<main>
	<h1>{data.eventInfo?.tittel}</h1>
	<h3>Dato: {data.eventInfo?.dato}</h3>
	<DataTable table$aria-label="User list" table$width={1000}>
		<Head>
			<Row>
				<Cell>Navn</Cell>
				<Cell>Organisasjon</Cell>
				<Cell>Epost</Cell>
				<Cell>Allergier</Cell>
				<Cell>RSVP</Cell>
			</Row>
		</Head>
		<Body>
			{#each data.deltakerInfo as person}
				<Row>
					<Cell>{person.navn}</Cell>
					<Cell>{person.orgId}</Cell>
					<Cell>{person.epost}</Cell>
					<Cell>
						{person.rsvp}
					</Cell>
				</Row>
			{/each}
		</Body>
	</DataTable>
</main>

<style>
	main {
		display: grid;
		margin-top: 5%;
		justify-content: center;
		align-items: center;
	}
</style>
