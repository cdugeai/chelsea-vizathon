<script lang="ts">
	import { Button } from 'svelte-ux';
	import WeeklyEffortChart from '$lib/components/WeeklyEffortChart.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GoalSection from '$lib/components/GoalSection.svelte';
	import PlayerIdentity from '$lib/components/PlayerIdentity.svelte';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	console.log({ data });
</script>

<Navbar />
<div>
	{@render title('Goals')}
	<GoalSection priorities={data.priorities} />
</div>

<Button>Click here</Button>

{#snippet title(text: string)}
	<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 leading-none">
		{text}
	</h2>
{/snippet}

<div class="flex-col">
	<h1>Graph section</h1>
	<div class="flex gap-2">
		<div class="graph-column">
			{@render title('Weekly data')}

			<WeeklyEffortChart data={data.gps_5_last_weeks} />
			<WeeklyEffortChart data={data.gps_5_last_weeks} />
			<WeeklyEffortChart data={data.gps_5_last_weeks} />
		</div>
		<div class="graph-column bg-red-400">
			{@render title('Yearly data')}
			round data on year
		</div>
		<div class="graph-column">
			{@render title('Player Identity')}

			<PlayerIdentity />
		</div>
	</div>
</div>

<style>
	.graph-column {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		border: 3px dashed yellow;
	}
</style>
