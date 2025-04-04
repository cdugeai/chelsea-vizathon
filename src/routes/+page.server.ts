import type { PageServerLoad, Actions } from './$types.js';
import { csv } from 'd3-fetch';

import { load_gps_5_last_weeks, load_priorities } from 'data';

export const load: PageServerLoad = async (event) => {
	const parseYearlyData: boolean = true;

	const gps_yearly_data = parseYearlyData
		? await csv(
				'https://gist.githubusercontent.com/cdugeai/d03aa93e9c310747d5c9bf9c5fedb048/raw/3c00caa642e2f4a859fb97e94eeea0570e1e5e61/marts_yearly_data.csv'
			)
		: {};

	return {
		gps_5_last_weeks: load_gps_5_last_weeks(),
		gps_yearly_data,
		priorities: load_priorities()
	};
};
