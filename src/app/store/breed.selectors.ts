import {createFeatureSelector, createSelector} from "@ngrx/store";
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
)