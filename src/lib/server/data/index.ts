import priorities from './priorities.json';
import gps_5_last_weeks from './gps_5_last_weeks.json';

export interface PriorityInterface {
	Area: string;
	Category: string;
	'Performance Type': string;
	Priority: number;
	'Review Date': string;
	Target: string;
	'Target set': string;
	Tracking: string;
	progression: number;
}

export interface GpsDataRaw {
	previous_week: number;
	md_minus_code: number;
	day_duration: number;
	distance: number;
	peak_speed: number;
	info_cols: '-';
	date: Date;
	match_week: number;
}

export interface GpsData {
	previous_week: number;
	md_minus_code: number;
	value: number;
	info_cols: '-';
	date: Date;
}

function getRandomInt(min: number, max: number): number {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export function load_priorities(): PriorityInterface[] {
	return priorities
		.map((obj) => ({ ...obj, progression: getRandomInt(0, 100) }))
		.sort((a, b) => a.progression - b.progression) as PriorityInterface[];
}

export function load_gps_5_last_weeks(): GpsDataRaw[] {
	return gps_5_last_weeks.map((e) => ({
		previous_week: e.previous_week,
		md_minus_code: e.md_minus_code,
		day_duration: e.day_duration,
		distance: e.distance,
		peak_speed: e.peak_speed,
		info_cols: '-',
		date: new Date(e.date),
		match_week: e.match_week
	}));
}
