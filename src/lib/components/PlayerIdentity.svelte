<script lang="ts">
	import { Card } from 'svelte-ux';
	interface PlayerIdentityInterface {
		name: string;
		age: number;
		position: string;
	}

	const player: PlayerIdentityInterface = {
		name: 'John Doe',
		age: 23,
		position: 'Attacker (9)'
	};
</script>

<div class="container">
	<h2>Player identity</h2>
	<div class="player-card">
		<div class="img-container">image</div>
		<h2>{player.name}</h2>
		<p>Age: {player.age}</p>
		<p>Position: {player.position}</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
	}
	.player-card {
		display: flex;
		flex-direction: column;
	}

	.img-container {
		height: 200px;
		margin: 10px 10px;
		border: 1px dashed green;
	}
</style>
