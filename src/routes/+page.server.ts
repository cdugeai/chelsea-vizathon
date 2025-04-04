import type { PageServerLoad, Actions } from './$types.js';

import {
	type GpsDataRaw,
	type GpsYearlyData,
	load_gps_5_last_weeks,
	load_gps_yearly_data,
	load_priorities,
	type PriorityInterface
} from 'data';

interface ReturnType {
	gps_5_last_weeks: GpsDataRaw[];
	gps_yearly_data: GpsYearlyData[];
	priorities: PriorityInterface[];
}
export const load: PageServerLoad = async (event): Promise<ReturnType> => {
	return {
		gps_5_last_weeks: load_gps_5_last_weeks(),
		gps_yearly_data: load_gps_yearly_data(),
		priorities: load_priorities()
	};
};
