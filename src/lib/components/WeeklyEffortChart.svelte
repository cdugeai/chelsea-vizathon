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
	interface Props {
		data: GpsData[];
	}

	let { data, ...rest }: Props = $props();

	console.log(data);
	console.log('');
	let dateSeriesData = data.map((e) => ({
		date: new Date(e.date),
		value: parseFloat(e.day_duration),
		wweek: parseInt(e.wweek),
		yyear: parseInt(e.yyear),
		md_minus_code: parseInt(e.md_minus_code)
	}));

	interface dateSeriesDataEnhancedInterface {
		date: Date;
		value: number;
		md_minus_code: number;
		weekNo: number;
		yyear: number;
	}
	let weekIndex = 0;
	let dateSeriesDataEnhanced: dateSeriesDataEnhancedInterface[] = dateSeriesData.map((e) => ({
		date: e.date,
		value: e.value,
		md_minus_code: e.md_minus_code,
		weekNo: e.wweek,
		yyear: e.yyear
	}));

	console.log(dateSeriesDataEnhanced.filter((e) => e.weekNo === 31 && e.yyear === 2024));

	const dataMap = new Map();
	dataMap.set(
		'31',
		dateSeriesDataEnhanced
			.filter((e) => e.weekNo === 31 && e.yyear === 2024)
			.sort((a, b) => a.md_minus_code - b.md_minus_code)
	);
	dataMap.set(
		'32',
		dateSeriesDataEnhanced
			.filter((e) => e.weekNo === 32 && e.yyear === 2024)
			.sort((a, b) => a.md_minus_code - b.md_minus_code)
	);
	dataMap.set(
		'33',
		dateSeriesDataEnhanced
			.filter((e) => e.weekNo === 33 && e.yyear === 2024)
			.sort((a, b) => a.md_minus_code - b.md_minus_code)
	);

	let renderContext: 'svg' | 'canvas' = 'svg';
	let debug = false;
	console.log({ dataMap });
</script>

<div class="chart">
	<LineChart
		x="md_minus_code"
		y="value"
		{renderContext}
		{debug}
		series={[
			{ key: '31', data: dataMap.get('31'), color: 'red' },
			{ key: '32', data: dataMap.get('32'), color: 'blue' },
			{ key: '33', data: dataMap.get('33'), color: 'green' }
		]}
	/>
</div>

<style>
	.chart {
		height: 150px;
		flex-grow: 1;
	}
</style>
