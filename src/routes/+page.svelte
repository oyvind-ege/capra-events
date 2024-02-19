<script lang="ts">
	import type { PageData } from './$types';
	import dayjs from 'dayjs';

	export let data: PageData;
</script>

<main>
	<h1>Fagkvelder med Capra</h1>
	<table>
		<tr>
			<th>Dato</th>
			<th>Tittel</th>
			<th>Påmeldte</th>
			<th>Påmelding</th>
		</tr>
		{#each data.aktiviteter as { name, date, description }}
			<tr>
				<td>{dayjs(date.start).format('DD.MM')}</td>
				<td>{name}</td>
				<td>3/40</td>
				<td><a href="/eventer/">Klikk her</a></td>
			</tr>
		{/each}
	</table>
</main>

<style>
	main {
		display: grid;
		margin-top: 5%;
		justify-content: center;
		align-items: center;
	}
</style>
