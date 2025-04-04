import priorities from './priorities.json';

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
