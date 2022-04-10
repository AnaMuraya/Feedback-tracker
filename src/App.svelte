<script>
	let firstName = 'Ana';
	let lastName = 'Muraya';
	let color = 'blue';
	let show = false;
	let members = [
		{
			id: '1',
			name: 'Ana'
		},
		{
			id: '2',
			name: 'Bob'
		},
		{
			id: '3',
			name: 'Muraya'
		},
		{
			id: '4',
			name: 'Andy'
		}
	]
	const toggle = () => {
	color = color==='blue'?'yellow':'blue'; 
	show = !show
	members = [...members, {id: '5', name: 'Mike'}]
	}

	$:name = firstName + ' ' + lastName;

</script>

<main>
	<h1 style="color: {color};">Hello {name}!</h1>
	{#if show}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{:else}
		<p>Good day</p>
	{/if}
	
	{#each members as member (member.id) }
		<p>{member.id}: {member.name}</p>
		
	{/each}
	
	<button on:click="{toggle}">Click</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>