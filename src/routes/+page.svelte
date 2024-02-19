<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1>Fagkvelder med Capra</h1>
	{#each data.aktivitetsoversikt as { name, date, description }}
		<h3>Tittel: {name}</h3>
		<p>Dato: {date}</p>
		<p>Beskrivelse: {description}</p>
	{/each}
</main>

<style>
	main {
		display: grid;
		margin-top: 5%;
		justify-content: center;
		align-items: center;
	}
</style>
