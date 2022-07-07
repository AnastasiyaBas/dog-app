import {createAction, props} from "@ngrx/store";
import {Breed} from "../modules/breed";

export enum BreedActionsNames {
    Init = '[Breed] Init',
    LoadBreeds = '[Breed] Load Breeds',
    LoadBreedsSuccess = '[Breed] Load Breeds Success',
    LoadBreedsFailure = '[Breed] Load Breeds Failure',
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