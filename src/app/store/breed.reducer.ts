import {BreedState, initialBreedState} from './breed.state';
import * as breedActions from './breed.actions';
import {Action, createReducer, on} from "@ngrx/store";

const BreedsReducer = createReducer(
    initialBreedState,
    on(breedActions.Init, (state) => ({ ...state, loaded: false, error: null })),
    on(breedActions.LoadBreeds, (state) => ({
        ...state,
        loaded: false,
        error: null,
    })),
    on(breedActions.LoadBreedsSuccess, (state, { data }) => ({
        ...state,
        breeds: data,
        loaded: true,
        error: null,
    })),
    on(breedActions.LoadBreedsFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: BreedState | undefined, action: Action) {
    return BreedsReducer(state, action);
}