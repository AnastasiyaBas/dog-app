import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import * as breedSelectors from "../store/breed.selectors";
import {Breed} from "../modules/breed";
import {BreedState} from "../store/breed.state";
import * as breedActions from "../store/breed.actions";

@Injectable() export class BreedStateFacade {
    public readonly loaded$: Observable<boolean> = this.store.pipe(
        select(breedSelectors.getBreedsLoaded)
    );
    public readonly allBreeds$: Observable<Breed[]> = this.store.pipe(
        select(breedSelectors.getAllBreeds)
    );

    constructor(private readonly store: Store<BreedState>) {}

    public init(): void {
        this.store.dispatch(breedActions.Init());
    }
    public loadBreeds(): void {
        this.store.dispatch(breedActions.LoadBreeds());
    }

}