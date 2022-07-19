import {createAction, props} from "@ngrx/store";
import {Breed} from "../modules/breed";

export enum BreedActionsNames {
    Init = '[Breed] Init',
    LoadBreeds = '[Breed] Load Breeds',
    LoadBreedsSuccess = '[Breed] Load Breeds Success',
    LoadBreedsFailure = '[Breed] Load Breeds Failure',
    AddSearchValue = '[string] Add Search Value',
    LoadCategories = '[string] Load Categories',
    AddSelectedOption = '[string] Add Selected Option'
}

export const Init = createAction(BreedActionsNames.Init);

export const LoadBreeds = createAction(BreedActionsNames.LoadBreeds);

export const LoadBreedsSuccess = createAction(
    BreedActionsNames.LoadBreedsSuccess,
    props<{ data: Breed[] }>()
);

export const LoadBreedsFailure = createAction(
    BreedActionsNames.LoadBreedsFailure,
    props<{ error: string | null }>()
);

export const AddSearchValue = createAction(
    BreedActionsNames.AddSearchValue,
    props<{ search: string | '' }>()
);

export const AddCategoryOptions = createAction(
    BreedActionsNames.LoadCategories,
    props<{ categories: string[] }>()
);

export const AddSelectedOption = createAction(
    BreedActionsNames.AddSelectedOption,
    props<{ category: string[] }>()
);