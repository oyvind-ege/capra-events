<script lang="ts">
	import type { PageData } from './$types';

	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import Button from '@smui/button';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	export let data: PageData;
</script>

<main>
	<h1>Fagkvelder med Capra</h1>
	<DataTable table$width={1000}>
		<Head>
			<Row>
				<Cell>Tittel</Cell>
				<Cell>Beskrivelse</Cell>
				<Cell>Dato</Cell>
				<Cell></Cell>
			</Row>
		</Head>
		<Body>
			{#each data.eventer as event}
				<Row>
					<Cell>{event.tittel}</Cell>
					<Cell>{event.beskrivelse}</Cell>
					<Cell>{event.dato}</Cell>
					<Cell
						><Button variant="raised" on:click={() => goto(`eventer/${event.id}`)}
							>Meld deg på</Button
						></Cell
					>
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
