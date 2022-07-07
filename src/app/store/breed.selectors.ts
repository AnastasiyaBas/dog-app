import { BreedState, BREED_FEATURE_KEY } from "./breed.state"
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const getBreedsState = createFeatureSelector<BreedState>(BREED_FEATURE_KEY);

export const getBreedsLoaded = createSelector(
    getBreedsState,
    (state: BreedState) => state && state.loaded
);

export const getBreedsError = createSelector(
    getBreedsState,
    (state: BreedState) => state.error
);

export const getAllBreeds  = createSelector(
    getBreedsState,
    (state: BreedState) => state.breeds
);