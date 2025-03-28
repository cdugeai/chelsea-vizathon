<script lang="ts">
	import { Button } from 'svelte-ux';

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
	$: dateSeriesDataWithNulls = dateSeriesData.map((d) => {
		return {
			...d,
			value: Math.random() < 0.2 ? null : d.value
		};
	});

	const keys = ['apples', 'bananas', 'oranges'];

	const pitchData = [
		{ name: 'fastball', value: 10 },
		{ name: 'change', value: 0 },
		{ name: 'slider', value: 4 },
		{ name: 'cutter', value: 8 },
		{ name: 'curve', value: 5 }
	];

	const budgetData = [
		{ name: 'Sales', budget: 22000, actual: 40000 },
		{ name: 'Administration', budget: 3000, actual: 14000 },
		{ name: 'Information Technology', budget: 20000, actual: 28000 },
		{ name: 'Customer Support', budget: 35000, actual: 26000 },
		{ name: 'Development', budget: 50000, actual: 42000 },
		{ name: 'Marketing', budget: 18000, actual: 21000 }
	];

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

<Button>Click here</Button>

<div class="h-[300px] p-4 border rounded">
	area chart below:
	<AreaChart data={dateSeriesData} x="date" y="value" {renderContext} {debug} />
</div>
