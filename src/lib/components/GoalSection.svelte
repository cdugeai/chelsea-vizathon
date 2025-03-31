<script lang="ts">
	interface GoalInterface {
		title: string;
		progression: number;
		category: 'personal' | 'sport';
		dateStart: string;
		dateEnd: string;
	}

	const goals: GoalInterface[] = [
		{
			title: 'Faster sprint',
			progression: 40,
			category: 'sport',
			dateStart: '12-24',
			dateEnd: '05-25'
		},
		{
			title: 'Better sleep',
			progression: 70,
			category: 'personal',
			dateStart: '12-24',
			dateEnd: '05-25'
		},
		{
			title: 'Better nutrition',
			progression: 60,
			category: 'personal',
			dateStart: '12-24',
			dateEnd: '05-25'
		}
	];
</script>

<div class="flex-col border-solid border-2 border-red-400">
	<h2 class="title">Goal section</h2>
	<div class="container">
		{#each goals as goal}
			<div class="container-goal">{goal.title}</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

	.container-goal {
		background-color: yellowgreen;
	}

	.title {
		background-color: yellow;
	}
</style>
