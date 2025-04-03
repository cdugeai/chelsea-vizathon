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

	const dateSeriesDataMock = [
		{
			date: new Date('2025-02-26T23:00:00.000Z'),
			value: 60
		},
		{
			date: new Date('2025-02-27T23:00:00.000Z'),
			value: 52
		},
		{
			date: new Date('2025-02-28T23:00:00.000Z'),
			value: 53
		},
		{
			date: new Date('2025-03-01T23:00:00.000Z'),
			value: 66
		},
		{
			date: new Date('2025-03-02T23:00:00.000Z'),
			value: 81
		},
		{
			date: new Date('2025-03-03T23:00:00.000Z'),
			value: 51
		},
		{
			date: new Date('2025-03-04T23:00:00.000Z'),
			value: 100
		},
		{
			date: new Date('2025-03-05T23:00:00.000Z'),
			value: 55
		},
		{
			date: new Date('2025-03-06T23:00:00.000Z'),
			value: 96
		},
		{
			date: new Date('2025-03-07T23:00:00.000Z'),
			value: 50
		},
		{
			date: new Date('2025-03-08T23:00:00.000Z'),
			value: 87
		},
		{
			date: new Date('2025-03-09T23:00:00.000Z'),
			value: 97
		},
		{
			date: new Date('2025-03-10T23:00:00.000Z'),
			value: 87
		},
		{
			date: new Date('2025-03-11T23:00:00.000Z'),
			value: 97
		},
		{
			date: new Date('2025-03-12T23:00:00.000Z'),
			value: 84
		},
		{
			date: new Date('2025-03-13T23:00:00.000Z'),
			value: 95
		},
		{
			date: new Date('2025-03-14T23:00:00.000Z'),
			value: 72
		},
		{
			date: new Date('2025-03-15T23:00:00.000Z'),
			value: 83
		},
		{
			date: new Date('2025-03-16T23:00:00.000Z'),
			value: 55
		},
		{
			date: new Date('2025-03-17T23:00:00.000Z'),
			value: 81
		},
		{
			date: new Date('2025-03-18T23:00:00.000Z'),
			value: 76
		},
		{
			date: new Date('2025-03-19T23:00:00.000Z'),
			value: 79
		},
		{
			date: new Date('2025-03-20T23:00:00.000Z'),
			value: 64
		},
		{
			date: new Date('2025-03-21T23:00:00.000Z'),
			value: 66
		},
		{
			date: new Date('2025-03-22T23:00:00.000Z'),
			value: 91
		},
		{
			date: new Date('2025-03-23T23:00:00.000Z'),
			value: 75
		},
		{
			date: new Date('2025-03-24T23:00:00.000Z'),
			value: 77
		},
		{
			date: new Date('2025-03-25T23:00:00.000Z'),
			value: 88
		},
		{
			date: new Date('2025-03-26T23:00:00.000Z'),
			value: 51
		},
		{
			date: new Date('2025-03-27T23:00:00.000Z'),
			value: 66
		}
	];

	interface GpsData {
		date: string;
		day_duration: string;
		distance: string;
		distance_over_21: string;
		distance_over_24: string;
		distance_over_27: string;
		md_minus_code: string;
		md_plus_code: string;
		peak_speed: string;
		season: string;
		wweek: string;
		yyear: string;
	}

	interface GpsData5Last {
		previous_week: string;
		md_minus_code: string;
		day_duration: string;
		info_cols: '-';
		date: string;
		match_week: string;
	}

	interface Props {
		data: GpsData5Last[];
	}

	let { data, ...rest }: Props = $props();

	console.log(data);
	console.log('');
	let dateSeriesData = data.map((e) => ({
		date: new Date(e.date),
		day_duration: parseFloat(e.day_duration),
		md_minus_code: parseInt(e.md_minus_code),
		previous_week: parseInt(e.previous_week)
	}));

	console.log(dateSeriesData.filter((e) => e.previous_week == 0));

	const dataMap = new Map();
	dataMap.set(
		'currentweek',
		dateSeriesData
			.filter((e) => e.previous_week === 0)
			.sort((a, b) => a.md_minus_code - b.md_minus_code)
	);
	dataMap.set(
		'prev 1 w',
		dateSeriesData
			.filter((e) => e.previous_week === 1)
			.sort((a, b) => a.md_minus_code - b.md_minus_code)
	);
	dataMap.set(
		'prev 2 w',
		dateSeriesData
			.filter((e) => e.previous_week === 2)
			.sort((a, b) => a.md_minus_code - b.md_minus_code)
	);

	let renderContext: 'svg' | 'canvas' = 'svg';
	let debug = false;
	console.log({ dataMap });
</script>

<div class="chart">
	<LineChart
		x="md_minus_code"
		y="day_duration"
		legend
		{renderContext}
		{debug}
		series={[
			//d9f0ff
			{ key: 'Current week', data: dataMap.get('currentweek'), color: 'red' },
			{ key: 'Week - 1', data: dataMap.get('prev 1 w'), color: '#a3d5ff' },
			{ key: 'Week - 2', data: dataMap.get('prev 2 w'), color: '#83c9f4' }
		]}
	/>
</div>

<style>
	.chart {
		height: 150px;
		flex-grow: 1;
	}
</style>
