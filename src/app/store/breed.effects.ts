import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {BreedStateFacade} from "../facade/breed-state-facade";
import {Breed} from "../modules/breed";
import * as breedActions from "./breed.actions";
import {BreedActionsNames} from "./breed.actions";
import {BreedService} from "./breed.service";

@Injectable()
export class BreedsEffects {
    constructor(
        private actions$: Actions,
        private breedsService: BreedService,
        public readonly breedFacade: BreedStateFacade
    ) {
    }

    public readonly loadBreeds$: Observable<any> = createEffect(() => {
        return this.actions$.pipe(
            ofType(BreedActionsNames.LoadBreeds),
            switchMap(() => this.breedsService.getBreedList()),
            map((data: Breed[]) => breedActions.LoadBreedsSuccess({data})),
            catchError((error: string | null) =>
                of(breedActions.LoadBreedsFailure({error}))
            )
        )
    });
}