import {Breed} from "../modules/breed";

export const BREED_FEATURE_KEY = 'breeds';

export interface BreedState {
    breeds: Breed[];
    loaded: boolean;
    error: string | null;
    search: string | '';
    categories: string[];
    selectedCategories: string[];
}

export const initialBreedState: BreedState = {
    breeds: [],
    loaded: false,
    error: null,
    search: '',
    categories: [],
    selectedCategories: []
};