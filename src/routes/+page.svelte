<script lang="ts">
	import { Button } from 'svelte-ux';
	import WeeklyEffortChart from '$lib/components/WeeklyEffortChart.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GoalSection from '$lib/components/GoalSection.svelte';
	import PlayerIdentity from '$lib/components/PlayerIdentity.svelte';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();

	console.log({ data });

	interface GpsData {
		previous_week: number;
		md_minus_code: number;
		value: number;
		info_cols: '-';
		date: Date;
	}

	let data_day_duration: GpsData[] = data.gps_5_last_weeks.map((e) => ({
		previous_week: parseInt(e.previous_week),
		md_minus_code: parseInt(e.md_minus_code),
		value: parseFloat(e.day_duration),
		info_cols: '-',
		date: new Date(e.date)
	}));

	let data_distance: GpsData[] = data.gps_5_last_weeks.map((e) => ({
		previous_week: parseInt(e.previous_week),
		md_minus_code: parseInt(e.md_minus_code),
		value: parseFloat(e.distance),
		info_cols: '-',
		date: new Date(e.date)
	}));

	let data_peak_speed: GpsData[] = data.gps_5_last_weeks.map((e) => ({
		previous_week: parseInt(e.previous_week),
		md_minus_code: parseInt(e.md_minus_code),
		value: parseFloat(e.peak_speed),
		info_cols: '-',
		date: new Date(e.date)
	}));
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

{#snippet chartTitle(text: string, description: string)}
	<h2 class=" my-1 text-center text-2xl font-bold tracking-tight text-gray-900 leading-none">
		{text}
	</h2>
	<h2 class=" text-center mx-4 text-sm font-extralight tracking-tight text-gray-900 leading-none">
		{description}
	</h2>
{/snippet}

<div class="flex-col">
	<h1>Graph section</h1>
	<div class="flex gap-2 justify-between">
		<div class="graph-column">
			{@render title('Weekly data')}
			<div class="p-4 border rounded">
				{@render chartTitle('Day duration', 'Duration of training each day before matchday.')}
				<WeeklyEffortChart data={data_day_duration} display_legend={false} />
				{@render chartTitle('Day Distance', 'Distance run each day before matchday.')}
				<WeeklyEffortChart data={data_distance} display_legend={false} />
				{@render chartTitle('Peak speed', 'Maximum speed each day before matchday.')}
				<WeeklyEffortChart data={data_peak_speed} display_legend={true} />
			</div>
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
		max-width: 33%;
	}
</style>
