<script lang="ts">
	import { Calendar, Chart, Svg, Group, Text, Tooltip } from 'layerchart';
	import { format, PeriodType } from '@layerstack/utils';

	import { startOfYear, endOfYear } from 'date-fns';

	import { scaleThreshold } from 'd3-scale';
	import { range } from 'd3-array';

	const now = new Date();

	interface Props {
		tooltipLabel: string;
		data: Array<any>;
	}

	let { tooltipLabel, data, ...rest }: Props = $props();

	const firstDayOfYear = startOfYear(data[0].date);
	const lastDayOfYear = endOfYear(data[0].date);
</script>

<Chart
	{data}
	x="date"
	c="value"
	cScale={scaleThreshold().unknown('transparent')}
	cRange={[
		'var(--color-blue-100)',
		'var(--color-blue-300)',
		'var(--color-blue-500)',
		'var(--color-blue-700)'
	]}
	let:tooltip
>
	<Svg>
		<Calendar start={firstDayOfYear} end={lastDayOfYear} {tooltip} monthPath />
	</Svg>

	<Tooltip.Root let:data>
		<Tooltip.Header>{format(data.date, PeriodType.Day)}</Tooltip.Header>

		{#if data.value != null}
			<Tooltip.List>
				<Tooltip.Item label={tooltipLabel} value={data.value} format="decimal" valueAlign="right" />
			</Tooltip.List>
		{/if}
	</Tooltip.Root>
</Chart>
