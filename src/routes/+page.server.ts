import type { PageServerLoad, Actions } from './$types.js';
import { csv } from 'd3-fetch';

export const load: PageServerLoad = async (event) => {
	const parsePriorities: boolean = true;
	const parseGps: boolean = false;

	const priorities = parsePriorities
		? await csv(
				'https://raw.githubusercontent.com/Chelsea-Fc-Performance-Insights/Competition/refs/heads/main/DATA/CFC%20Individual%20Priority%20Areas.csv'
			)
		: {};
	const gps = parseGps
		? await csv(
				'https://github.com/Chelsea-Fc-Performance-Insights/Competition/raw/refs/heads/main/DATA/CFC%20GPS%20Data.csv'
			)
		: {};

	return {
		priorities,
		gps
	};
};
