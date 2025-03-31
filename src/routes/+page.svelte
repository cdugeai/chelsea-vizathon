<script lang="ts">
	import { Button } from 'svelte-ux';
	import WeeklyEffortChart from '$lib/components/WeeklyEffortChart.svelte';
</script>

<Button>Click here</Button>
area chart below:

<div class="h-[300px] p-4 border rounded">
	<WeeklyEffortChart data={[]} />
</div>
