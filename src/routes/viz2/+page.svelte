<script lang="ts">
	import { cha } from 'chart.js';
	import Chart from 'chart.js/auto';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';
	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

	const config = {
		type: 'line',
		data: {},
		options: {},
		plugins: []
	};
</script>

<Line data={...} />
