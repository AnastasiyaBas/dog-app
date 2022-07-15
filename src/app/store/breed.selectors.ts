import {createFeatureSelector, createSelector} from "@ngrx/store";
import {Breed} from "../modules/breed";
import {BREED_FEATURE_KEY, BreedState} from "./breed.state"

export const getBreedsState = createFeatureSelector<BreedState>(BREED_FEATURE_KEY);

export const getBreedsLoaded = createSelector(
    getBreedsState,
    (state: BreedState) => state && state.loaded
);

export const getBreedsError = createSelector(
    getBreedsState,
    (state: BreedState) => state.error
);

export const getAllBreeds = createSelector(
    getBreedsState,
    (state: BreedState) => state.breeds
);
export const getSearchValue = createSelector(
    getBreedsState,
    (state: BreedState) => state.search
);
export const getFilteredBreeds = createSelector(
    getAllBreeds,
    getSearchValue,
    (breedList: Breed[], searchValue: string) => breedList.filter(item => (item.name.toLowerCase().includes(searchValue.toLowerCase())))
);