<script lang="ts">
	import Highcharts from 'highcharts';
	import Chart from '@highcharts/svelte';

	let series: Highcharts.SeriesLineOptions = {
		type: 'line',
		name: 'Jane',
		data: [1, 0, 4]
	};

	function addRandomPointToSeries() {
		series.data?.push(Math.random());
		series.data = series.data;
	}

	let options: Highcharts.Options;

	$: options = {
		title: {
			text: 'Fruit Consumption'
		},
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		series: [series]
	};
</script>

<Chart {options} />

<button on:click={addRandomPointToSeries}>Add random point to series</button>
