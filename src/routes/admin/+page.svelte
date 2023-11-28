<script lang="ts">
	import Textfield from '@smui/textfield';
	import Button from '@smui/button';

	let tittel: string = '';
	let beskrivelse: string = '';
	let dato: string = '';
	let tidspunkt: string = '';
</script>

<main>
	<h1>Nytt event</h1>
	<form method="POST">
		<Textfield
			input$name="tittel"
			bind:value={tittel}
			label="Tittel"
			style="min-width: 250px; margin-bottom: 5%"
			required
			variant="outlined"
		/>
		<Textfield
			input$name="beskrivelse"
			bind:value={beskrivelse}
			label="Beskrivelse"
			style="margin-bottom: 5%"
			input$rows={15}
			input$cols={55}
			textarea
			required
			variant="outlined"
		/>
		<Textfield
			input$name="dato"
			type="date"
			bind:value={dato}
			label="Dato"
			style="margin-bottom: 5%"
			variant="outlined"
		/>
		<Textfield
			input$name="tidspunkt"
			type="time"
			bind:value={tidspunkt}
			label="Tidspunkt"
			style="margin-bottom: 5%"
			variant="outlined"
		/>
		<Button variant="raised">Lag event</Button>
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
</style>
