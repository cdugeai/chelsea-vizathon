<script lang="ts">
	import { Button } from 'svelte-ux';
	import WeeklyEffortChart from '$lib/components/WeeklyEffortChart.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GoalSection from '$lib/components/GoalSection.svelte';
	import PlayerIdentity from '$lib/components/PlayerIdentity.svelte';
</script>

<Navbar />
<GoalSection />

<Button>Click here</Button>

<div class="flex-col">
	<h1>Graph section</h1>
	<div class="flex gap-2">
		<div class="graph-column">
			<h2>Weekly data</h2>

			<WeeklyEffortChart data={[]} />
			<WeeklyEffortChart data={[]} />
			<WeeklyEffortChart data={[]} />
		</div>
		<div class="graph-column bg-red-400">
			<h2>Yearly data</h2>
			round data on year
		</div>
		<div class="graph-column">
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
