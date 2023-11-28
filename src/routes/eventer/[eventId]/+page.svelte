<script lang="ts">
	import Textfield from '@smui/textfield';
	import Button from '@smui/button';
	import Chip, { Set, Text } from '@smui/chips';

	import type { PageData } from './$types';

	let navn: string = '';
	let org: string = '';
	let allergier: string[] = [];

	export let data: PageData;
</script>

<main>
	<h1>Registrering til "{data.eventData?.tittel}"</h1>
	<form method="POST">
		<Textfield
			input$name="navn"
			bind:value={navn}
			label="Navn"
			style="min-width: 250px; margin-bottom: 5%"
			required
			variant="outlined"
		/>
		<Textfield
			input$name="org"
			bind:value={org}
			label="Organisasjon"
			style="min-width: 250px; margin-bottom: 5%"
			required
			variant="outlined"
		/>
		<div class="allergiListe">
			<h2>Allergiliste</h2>
			<Set chips={data.allergiListe.sort()} let:chip filter bind:selected={allergier}>
				<Chip {chip}><Text>{chip}</Text></Chip>
			</Set>
		</div>
		<Button variant="raised">Meld deg på</Button>
	</form>
</main>

<style>
	main {
		display: grid;
		margin-top: 5%;
		justify-content: center;
		align-items: center;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	.allergiListe {
		max-width: 40em;
		margin-bottom: 5%;
	}
</style>
