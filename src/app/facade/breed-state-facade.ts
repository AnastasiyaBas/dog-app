import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {combineLatest, filter, map, Observable, switchMap} from "rxjs";
import {Breed} from "../modules/breed";
import * as breedActions from "../store/breed.actions";
import * as breedSelectors from "../store/breed.selectors";
import {BreedState} from "../store/breed.state";

@Injectable()
export class BreedStateFacade {
    public readonly loaded$: Observable<boolean> = this.store.pipe(
        select(breedSelectors.getBreedsLoaded)
    );
    public readonly allBreeds$: Observable<Breed[]> = this.store.pipe(
        select(breedSelectors.getAllBreeds)
    );
    public readonly searchValue$: Observable<string | ''> = this.store.pipe(
        select(breedSelectors.getSearchValue)
    )

    public BreedList(): Observable<Breed[]> {
        const breedList: Observable<Breed[]> = this.loaded$.pipe(
            filter((isLoaded: boolean) => isLoaded),
            switchMap(() => this.allBreeds$)
        )
        return combineLatest([breedList, this.searchValue$]).pipe(
            map(([breedList, searchValue]) => {
                return breedList.filter(item => (item.name.toLowerCase().includes(searchValue.toLowerCase())))
            })
        )
    }

    constructor(private readonly store: Store<BreedState>) {
    }

    public init(): void {
        this.store.dispatch(breedActions.Init());
    }

    public loadBreeds(): void {
        this.store.dispatch(breedActions.LoadBreeds());
    }

    public addSearchValue(search: string): void {
        this.store.dispatch(breedActions.AddSearchValue({search}));
    }

}