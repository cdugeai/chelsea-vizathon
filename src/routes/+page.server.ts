import type { PageServerLoad, Actions } from './$types.js';
import { csv } from 'd3-fetch';

export const load: PageServerLoad = async (event) => {
	const parsePriorities: boolean = true;
	const parseGps: boolean = true;

	const priorities = parsePriorities
		? await csv(
				'https://raw.githubusercontent.com/Chelsea-Fc-Performance-Insights/Competition/refs/heads/main/DATA/CFC%20Individual%20Priority%20Areas.csv'
			)
		: {};
	const gps = parseGps
		? await csv(
				'https://gist.githubusercontent.com/cdugeai/5b364599406a0a4ac88398789bc2fed9/raw/0dc84aa4c83a2b26995bd15df4f9adb96b675bac/mart_days_before_match.csv'
			)
		: {};

	return {
		priorities,
		gps
	};
};
