<script lang="ts">
	import { Button } from 'svelte-ux';
	import WeeklyEffortChart from '$lib/components/WeeklyEffortChart.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GoalSection from '$lib/components/GoalSection.svelte';
	import PlayerIdentity from '$lib/components/PlayerIdentity.svelte';
	import type { PageData } from './$types.js';
	import CalendarViewSimple from '$lib/components/CalendarViewSimple.svelte';
	import type { GpsData } from 'data';

	let { data }: { data: PageData } = $props();

	let data_day_duration: GpsData[] = data.gps_5_last_weeks.map((e) => ({
		previous_week: e.previous_week,
		md_minus_code: e.md_minus_code,
		value: e.day_duration,
		info_cols: '-',
		date: e.date
	}));

	let data_distance: GpsData[] = data.gps_5_last_weeks.map((e) => ({
		previous_week: e.previous_week,
		md_minus_code: e.md_minus_code,
		value: e.distance,
		info_cols: '-',
		date: e.date
	}));

	let data_peak_speed: GpsData[] = data.gps_5_last_weeks.map((e) => ({
		previous_week: e.previous_week,
		md_minus_code: e.md_minus_code,
		value: e.peak_speed,
		info_cols: '-',
		date: e.date
	}));

	let selectedYearColumn: string = $state('peak_speed');
	let selectedData = $derived.by(() => {
		return data.gps_yearly_data.map((e) => ({
			year: e.yyear,
			date: new Date(e.date).setHours(0, 0, 0, 0),
			value: parseFloat(e[selectedYearColumn])
		}));
	});

	const selectNextData = () => {
		if (selectedYearColumn === 'peak_speed') {
			selectedYearColumn = 'day_duration';
		} else {
			selectedYearColumn = 'peak_speed';
		}
	};
</script>

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

<Navbar />
<div>
	{@render title('Goals')}
	<GoalSection priorities={data.priorities} />
</div>

<div class="flex-col">
	<div class="flex gap-2 justify-between">
		<div class="graph-column">
			{@render title('Weekly data')}
			<p class="mb-4 text-lg font-extralight tracking-tight text-gray-900 leading-none">
				Displays data over the last 3 match weeks. The x-axis represents the number of <b
					>days before match day</b
				>.
			</p>
			<p class="mb-4 text-lg font-extralight tracking-tight text-gray-900 leading-none">
				This graph allows to compare training intensity over the last few match weeks.
			</p>
			<div class="p-4 border rounded">
				{@render chartTitle('Day duration', 'Duration of training each day before matchday.')}
				<WeeklyEffortChart data={data_day_duration} display_legend={false} />
				{@render chartTitle('Day Distance', 'Distance run each day before matchday.')}
				<WeeklyEffortChart data={data_distance} display_legend={false} />
				{@render chartTitle('Peak speed', 'Maximum speed each day before matchday.')}
				<WeeklyEffortChart data={data_peak_speed} display_legend={true} />
			</div>
		</div>
		<div class="graph-column">
			{@render title('Yearly data')}
			<p>Evolution of variable <b>{selectedYearColumn}</b> over years.</p>

			<div class=" overflow-hidden p-4 border rounded flex flex-col">
				{#each ['2022', '2023', '2024', '2025'] as yy}
					<div class="h-[100px]">
						<CalendarViewSimple
							data={selectedData.filter((e) => e.year === yy)}
							tooltipLabel={selectedYearColumn}
						/>
					</div>
				{/each}

				<Button variant="outline" on:click={selectNextData}>Change variable</Button>
			</div>
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
