<script lang="ts">
	import { Card, Button } from 'svelte-ux';

	interface PlayerIdentityInterface {
		name: string;
		age: number;
		national_team: string;
		position: string;
		height: number;
		debut: string;
		jersey_no: number;
	}

	let players: PlayerIdentityInterface[] = [
		{
			name: 'Filip Jorgensen',
			age: 22,
			national_team: 'Denmark',
			position: 'Goalkeeper',
			height: 192,
			debut: '22 August, 2024',
			jersey_no: 12
		},
		{
			name: 'Tosin Adarabioyo',
			age: 27,
			national_team: 'England',
			position: 'Centre-back',
			height: 197,
			debut: '27 November, 2024',
			jersey_no: 4
		}
	];

	let playerIndex: number = $state(0);
	const selectNextPlayer = () => {
		if (playerIndex + 1 === players.length) {
			playerIndex = 0;
		} else {
			playerIndex = playerIndex + 1;
		}
	};

	const player: PlayerIdentityInterface = $derived.by(() => {
		return players[playerIndex];
	});
</script>

{#snippet title(text: string)}
	<h2 class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leading-none">
		{text}
	</h2>
{/snippet}

<div class="container items-center">
	<div class="player-card">
		<div class="img-container">
			<div class="flex flex-col justify-between">
				<p class="px-3 py-2 font-extrabold text-6xl font-cfc-color">{player.jersey_no}</p>
				<div class="flex flex-col mx-1 z-10">
					<h2 class="text-sm font-light font-cfc-color">{player.name.split(' ')[0]}</h2>
					<h2 class="text-4xl font-bold font-cfc-color">{player.name.split(' ')[1]}</h2>
				</div>
			</div>
			<img src={'/img/profile/' + player.jersey_no + '.png'} alt="player profile" />
		</div>

		<div class="flex gap-2 justify-between my-5" id="player-info">
			<div class="flex-col font-cfc-color font-bold">
				<p>NAME</p>
				<p>AGE</p>
				<p>POSITION</p>
				<p>NATIONAL TEAM</p>
				<p>HEIGHT</p>
				<p>DEBUT</p>
			</div>
			<div class="flex-col font-cfc-color font-light">
				<p>{player.name}</p>
				<p>{player.age}</p>
				<p>{player.position} ({player.jersey_no})</p>
				<p>{player.national_team}</p>
				<p>{player.height}</p>
				<p>{player.debut}</p>
			</div>
		</div>
	</div>
	<Button variant="outline" on:click={selectNextPlayer}>Next player</Button>
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
		display: flex;
		width: 300px;
		aspect-ratio: 1;
		margin: 10px 10px;
		border: 1px solid rgba(0, 20, 137, 0.21);
		border-radius: 5px;
		overflow: hidden;
	}

	.img-container img {
		height: 100%;
		width: 100%;
		object-fit: contain;
		/* or
              object-fit: cover; */
		position: relative;
		top: 10%;
		left: 0%;
		z-index: 1;
	}

	.font-cfc-color {
		color: #001489;
	}
</style>
