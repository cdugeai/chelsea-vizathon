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

	interface dateSeriesDataEnhancedInterface {
		date: Date;
		value: number;
		dayOfWeek: number;
		weekNo: number;
	}
	export let data;

	const dateSeriesData = [
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

	let weekIndex = 0;
	let dateSeriesDataEnhanced: dateSeriesDataEnhancedInterface[] = [];

	dateSeriesData.forEach((e) => {
		if (e.date.getDay() === 0) {
			weekIndex++;
		}
		dateSeriesDataEnhanced.push({
			date: e.date,
			value: e.value,
			dayOfWeek: e.date.getDay(),
			weekNo: weekIndex
		});
	});

	const dataMap = new Map();
	dataMap.set(
		'0',
		dateSeriesDataEnhanced.filter((e) => e.weekNo === 0)
	);
	dataMap.set(
		'1',
		dateSeriesDataEnhanced.filter((e) => e.weekNo === 1)
	);
	dataMap.set(
		'2x',
		dateSeriesDataEnhanced.filter((e) => e.weekNo === 2)
	);

	let renderContext: 'svg' | 'canvas' = 'svg';
	let debug = false;

	// Get a few random points to use for annotations
	$: annotations = [...dateSeriesData]
		.sort(() => Math.random() - 0.5)
		.slice(0, 5)
		.sort(sortFunc('date'))
		.map((d, i) => ({
			date: d.date,
			label: String.fromCharCode(65 + i),
			description: `This is an annotation for ${format(d.date)}`
		}));
</script>

<div class="chart">
	<AreaChart
		x="dayOfWeek"
		y="value"
		points
		{renderContext}
		{debug}
		series={[
			{ key: '0', data: dataMap.get('0'), color: 'red' },
			{ key: '1', data: dataMap.get('1'), color: 'blue' },
			{ key: '2', data: dataMap.get('2'), color: 'green' }
		]}
	/>
</div>

<style>
	.chart {
		height: 150px;
		flex-grow: 1;
	}
</style>
