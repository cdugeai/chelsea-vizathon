import type { PageServerLoad, Actions } from './$types.js';
import { csv } from 'd3-fetch';

import { load_priorities } from 'data';

export const load: PageServerLoad = async (event) => {
	const parseGps: boolean = true;
	const parse5lastW: boolean = true;
	const parseYearlyData: boolean = true;

	const gps = parseGps
		? await csv(
				'https://gist.githubusercontent.com/cdugeai/5b364599406a0a4ac88398789bc2fed9/raw/0dc84aa4c83a2b26995bd15df4f9adb96b675bac/mart_days_before_match.csv'
			)
		: {};

	const gps_5_last_weeks = parse5lastW
		? await csv(
				'https://gist.githubusercontent.com/cdugeai/20c1c6cca147f65599db24b5c7156241/raw/1812fe5fe2036ef5a67b166eef07372a8a5a840b/marts_gps_last_5_matchweeks.csv'
			)
		: {};

	const gps_yearly_data = parseYearlyData
		? await csv(
				'https://gist.githubusercontent.com/cdugeai/d03aa93e9c310747d5c9bf9c5fedb048/raw/3c00caa642e2f4a859fb97e94eeea0570e1e5e61/marts_yearly_data.csv'
			)
		: {};

	return {
		gps,
		gps_5_last_weeks,
		gps_yearly_data,
		priorities: load_priorities()
	};
};
