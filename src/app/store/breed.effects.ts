import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {BreedService} from "./breed.service";
import {BreedActionsNames} from "./breed.actions";
import * as breedActions from "./breed.actions";
import {Breed} from "../modules/breed";

@Injectable()
export class BreedsEffects {
    constructor(
        private actions$: Actions,
        private breedsService: BreedService
    ) {
    }

    public readonly loadBreeds$: Observable<any> = createEffect(() => {
        return this.actions$.pipe(
            ofType(BreedActionsNames.LoadBreeds),
            switchMap(() => this.breedsService.getBreedList()),
            map((data: Breed[]) => breedActions.LoadBreedsSuccess({ data })),
            catchError((error: string | null) =>
                of(breedActions.LoadBreedsFailure({ error }))
            )
        )
    });
}