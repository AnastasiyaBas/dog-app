import {Action, createReducer, on} from "@ngrx/store";
import * as breedActions from "./breed.actions";
import {BreedState, initialBreedState} from './breed.state';

const BreedsReducer = createReducer(
    initialBreedState,
    on(breedActions.Init, (state) => ({
        ...state,
        loaded: false,
        error: null
    })),
    on(breedActions.LoadBreeds, (state) => ({
        ...state,
        loaded: false,
        error: null,
    })),
    on(breedActions.LoadBreedsSuccess, (state, {data}) => ({
        ...state,
        breeds: data,
        loaded: true,
        error: null
    })),
    on(breedActions.LoadBreedsFailure, (state, {error}) => ({...state, error})),
    on(breedActions.AddSearchValue, (state, {search}) => ({
        ...state,
        search: search,
    })),
    on(breedActions.AddCategoryOptions, (state, {categories}) => ({
        ...state,
        categories: categories,
    })),
    on(breedActions.AddSelectedOption, (state, {category}) => ({
        ...state,
        selectedCategories: category
    }))
)

export function reducer(state: BreedState | undefined, action: Action) {
    return BreedsReducer(state, action);
}