export interface Breed {
	id: number;
	name: string;
	bred_for: string;
	breed_group: string;
	image: {
		id: number;
		url: string;
	};
}