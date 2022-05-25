export interface Breed {
	id: number;
	name: string;
	bred_for: string;
	breed_group: string;
	life_span: string;
	origin: string;
	temperament: string;
	height: {
		imperial: string;
		metric: string;
	};
	weight: {
		imperial: string;
		metric: string;
	}
	image: {
		id: number;
		url: string;
	};
	
}