<script lang="ts">
	import { Avatar, Progress, ProgressCircle, Icon } from 'svelte-ux';
	import Badge from '$lib/components/Badge.svelte';
	import GoalProgressionConcentric from '$lib/components/GoalProgressionConcentric.svelte';
	import { Point, Points } from 'layerchart';
	import type { PriorityInterface } from 'data';

	const colorMap = new Map([
		['Sport', 'pink'],
		['Personal', 'blue'],
		['Performance', 'pink'],
		['Recovery', 'green']
	]);

	interface Props {
		priorities: PriorityInterface[];
	}
	let { priorities, ...rest }: Props = $props();

	const average = (array) => array.reduce((a, b) => a + b) / array.length;

	let concentric_values: { red: number; green: number; blue: number } = {
		red: average(priorities.filter((p) => p.Category === 'Performance').map((e) => e.progression)),
		green: average(priorities.filter((p) => p.Category === 'Recovery').map((e) => e.progression)),
		blue: 65
	};
</script>

{#snippet title(text: string)}
	<h2 class="mb-2 text-2xl font-sans tracking-tight leading-none text-red-50">
		{text}
	</h2>
{/snippet}

{#snippet renderDate(date_: string)}
	<p class=" text-blue-200 progress-date">{date_}</p>
{/snippet}

{#snippet renderProgress(progress: number)}
	<p class="text-sm text-blue-100">{progress} %</p>
{/snippet}

{#snippet getAvatar(category: string)}
	{#if category === 'Sport'}
		<Avatar class={'bg-' + colorMap.get(category) + '-200'}>
			<Icon
				svg={'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>soccer</title><path d="M16.93 17.12L16.13 15.76L17.59 11.39L19 10.92L20 11.67C20 11.7 20 11.75 20 11.81C20 11.88 20.03 11.94 20.03 12C20.03 13.97 19.37 15.71 18.06 17.21L16.93 17.12M9.75 15L8.38 10.97L12 8.43L15.62 10.97L14.25 15H9.75M12 20.03C11.12 20.03 10.29 19.89 9.5 19.61L8.81 18.1L9.47 17H14.58L15.19 18.1L14.5 19.61C13.71 19.89 12.88 20.03 12 20.03M5.94 17.21C5.41 16.59 4.95 15.76 4.56 14.75C4.17 13.73 3.97 12.81 3.97 12C3.97 11.94 4 11.88 4 11.81C4 11.75 4 11.7 4 11.67L5 10.92L6.41 11.39L7.87 15.76L7.07 17.12L5.94 17.21M11 5.29V6.69L7 9.46L5.66 9.04L5.24 7.68C5.68 7 6.33 6.32 7.19 5.66S8.87 4.57 9.65 4.35L11 5.29M14.35 4.35C15.13 4.57 15.95 5 16.81 5.66C17.67 6.32 18.32 7 18.76 7.68L18.34 9.04L17 9.47L13 6.7V5.29L14.35 4.35M4.93 4.93C3 6.89 2 9.25 2 12S3 17.11 4.93 19.07 9.25 22 12 22 17.11 21 19.07 19.07 22 14.75 22 12 21 6.89 19.07 4.93 14.75 2 12 2 6.89 3 4.93 4.93Z" /></svg>'}
			></Icon>
		</Avatar>
	{:else if category === 'Personal'}
		<Avatar class={'bg-' + colorMap.get(category) + '-200'}>
			<Icon
				svg={'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-settings</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22Z" /></svg>'}
			></Icon>
		</Avatar>
	{/if}
{/snippet}

{#snippet legendItem(text: string, classColor: string)}
	<div class="flex items-center">
		<svg height="10" width="10" xmlns="http://www.w3.org/2000/svg">
			<circle r="6" cx="2" cy="5" class={classColor} />
		</svg>
		<p class="mx-1">{text}</p>
	</div>
{/snippet}

<div class="flex-col overflow-x-scroll">
	<div class="container py-1">
		<div class="container-concentric w-[150px] py-4 px-3 justify-evenly gap-3">
			<div class="w-[100px]">
				<GoalProgressionConcentric
					redValue={concentric_values.red}
					greenValue={concentric_values.green}
					blueValue={concentric_values.blue}
				/>
			</div>
			<div id="legend" class="flex-col py-0">
				<h2 class="mb-2 text-xl tracking-tight leading-none">Progress</h2>
				{@render legendItem('Performance', 'fill-red-500')}
				{@render legendItem('Recovery', 'fill-lime-400')}
				{@render legendItem('Other', 'fill-cyan-500')}
			</div>
		</div>
		{#each priorities as goal}
			<div class="container-goal">
				<div class="flex items-center justify-between">
					<Badge text={goal.Category} color={colorMap.get(goal.Category) || 'pink'} />

					<div class="flex items-start">
						<p class="text-4xl font-extrabold text-blue-200 text-right">{goal.progression}</p>
						<p class="text-sm font-extrabold text-gray-500 text-right">&nbsp; / 100</p>
					</div>
				</div>

				<div class="flex text-nowrap gap-1.5 items-start my-1">
					{@render getAvatar(goal.Category)}

					<div class="flex flex-col font-light mx-1.5">
						{@render title(goal.Area)}
						<p class="text-red-50 font-extralight text-sm">{goal.Target}</p>
					</div>
				</div>

				<Progress
					value={goal.progression / 100}
					class="[--color:theme(--color-white)] [--track-color:theme(--color-primary/15%)]"
				/>
				<div class="flex justify-between items-start">
					{@render renderDate('12-24')}
					{@render renderDate(goal['Review Date'])}
				</div>
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
		/*background-color: rgb(253 128 88);*/
		background-color: rgb(0 27 113);

		min-width: 250px;
		flex-shrink: 0;
		gap: 0;
		flex-direction: column;
		border-radius: 5px;
		padding: 0.5rem 1rem 1rem 1rem;
	}

	.container-concentric {
		display: flex;
		flex-direction: row;
		justify-items: start;
		background-color: rgba(3, 67, 243, 0.04);
		border: rgba(2, 58, 213, 0.51) 1px solid;
		min-width: 250px;
		border-radius: 5px;
	}

	.title {
		background-color: yellow;
	}

	.progress-date {
		font-size: 0.6rem;
	}
</style>
