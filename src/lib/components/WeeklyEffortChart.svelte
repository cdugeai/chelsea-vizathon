<script lang="ts">
	import {
		Axis,
		Canvas,
		Circle,
		Highlight,
		Labels,
		LinearGradient,
		LineChart,
		pivotLonger,
		AreaChart,
		Spline,
		Svg,
		Text,
		Tooltip
	} from 'layerchart';
	import { format, PeriodType, sortFunc } from '@layerstack/utils';

	interface GpsData {
		previous_week: number;
		md_minus_code: number;
		value: number;
		info_cols: '-';
		date: Date;
	}

	interface Props {
		data: GpsData[];
		display_legend: boolean;
	}

	let { data, display_legend, ...rest }: Props = $props();

	let cwData = data.filter((e) => e.previous_week == 0);
	console.log({ cwData });

	const dataMap = new Map();
	dataMap.set(
		'week_current',
		data.filter((e) => e.previous_week === 0).sort((a, b) => a.md_minus_code - b.md_minus_code)
	);
	dataMap.set(
		'week_current_prev',
		data.filter((e) => e.previous_week === 1).sort((a, b) => a.md_minus_code - b.md_minus_code)
	);
	dataMap.set(
		'week_current_prev_prev',
		data.filter((e) => e.previous_week === 2).sort((a, b) => a.md_minus_code - b.md_minus_code)
	);

	let renderContext: 'svg' | 'canvas' = 'svg';
	let debug = false;
	console.log({ dataMap });
</script>

<div class="chart">
	<LineChart
		x="md_minus_code"
		y="value"
		legend={display_legend}
		{renderContext}
		{debug}
		series={[
			//d9f0ff
			{ key: 'Current week', data: dataMap.get('week_current'), color: 'red' },
			{ key: 'Week - 1', data: dataMap.get('week_current_prev'), color: '#a3d5ff' },
			{ key: 'Week - 2', data: dataMap.get('week_current_prev_prev'), color: '#83c9f4' }
		]}
	/>
</div>

<style>
	.chart {
		height: 150px;
		flex-grow: 1;
	}
</style>
