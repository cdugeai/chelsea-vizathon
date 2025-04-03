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
		Chart,
		Arc,
		Text,
		Tooltip
	} from 'layerchart';
	import { format, PeriodType, sortFunc } from '@layerstack/utils';

	interface Props {
		redValue: number;
		greenValue: number;
		blueValue: number;
	}

	let { redValue, greenValue, blueValue, ...rest }: Props = $props();
</script>

<Chart>
	<Svg center>
		<Arc
			value={redValue}
			domain={[0, 100]}
			innerRadius={-10}
			cornerRadius={10}
			class="fill-red-500"
			track={{ class: 'fill-red-500/10' }}
		/>
		<Arc
			value={greenValue}
			domain={[0, 100]}
			outerRadius={-15}
			innerRadius={-10}
			cornerRadius={10}
			class="fill-lime-400"
			track={{ class: 'fill-lime-400/10' }}
		/>
		<Arc
			value={blueValue}
			domain={[0, 100]}
			outerRadius={-30}
			innerRadius={-10}
			cornerRadius={10}
			class="fill-cyan-400"
			track={{ class: 'fill-cyan-500/10' }}
		/>
	</Svg>
</Chart>
