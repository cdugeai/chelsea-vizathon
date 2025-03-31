<script lang="ts">
	import { Avatar, Progress, ProgressCircle } from 'svelte-ux';
	import Badge from '$lib/components/Badge.svelte';

	interface GoalInterface {
		title: string;
		progression: number;
		category: 'Personal' | 'Sport';
		dateStart: string;
		dateEnd: string;
	}

	const goals: GoalInterface[] = [
		{
			title: 'Faster sprint',
			progression: 40,
			category: 'Sport',
			dateStart: '12-24',
			dateEnd: '05-25'
		},
		{
			title: 'Better sleep',
			progression: 70,
			category: 'Personal',
			dateStart: '12-24',
			dateEnd: '05-25'
		},
		{
			title: 'Better nutrition',
			progression: 60,
			category: 'Personal',
			dateStart: '12-24',
			dateEnd: '05-25'
		}
	];
</script>

{#snippet title(text: string)}
	<h2 class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900 leading-none">
		{text}
	</h2>
{/snippet}

<div class="flex-col border-solid border-2 border-red-400">
	<div class="container py-1">
		{#each goals as goal}
			<div class="container-goal">
				<div class="flex items-center gap-1">
					<Badge text={goal.category} color="pink" />
					{@render title(goal.title)}
				</div>

				<p>{goal.progression}</p>
				<Avatar class="bg-primary">{goal.progression}</Avatar>
				<Progress
					value={goal.progression / 100}
					class="green [--track-color:theme(--color-success/5%)]"
				/>
				<ProgressCircle value={goal.progression} size={30} class="text-green-500 h-2.5" track />
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 100%;
		gap: 1rem;
		padding-left: 1rem;
		/*justify-content: space-between;*/
	}

	.container-goal {
		display: flex;
		flex-direction: column;
		border: 1px solid grey;
		border-radius: 5px;
		padding-left: 1rem;
		padding-right: 2rem;
	}

	.title {
		background-color: yellow;
	}
</style>
