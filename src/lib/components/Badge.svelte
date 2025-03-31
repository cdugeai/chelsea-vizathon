<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		text: string;
		color: 'blue' | 'green' | 'pink';
	}
	let { text, color, ...rest }: Props = $props();
</script>

{#if color === 'blue'}
	<span
		class="h-fit w-fit bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-900"
	>
		{text}
	</span>
{:else if color === 'green'}
	<span
		class="h-fit w-fit bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-900"
	>
		{text}
	</span>
{:else if color === 'pink'}
	<span
		class="h-fit w-fit bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-pink-900 dark:text-pink-900"
	>
		{text}
	</span>
{/if}
