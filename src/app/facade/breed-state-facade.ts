import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
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
    );

    public readonly breedList$: Observable<Breed[]> = this.store.pipe(
        select(breedSelectors.getFilteredBreeds)
    );

    public readonly categoryList$: Observable<string[]> = this.store.pipe(
        select(breedSelectors.getUniqueCategories)
    );

    public readonly selectedOptions$: Observable<string[]> = this.store.pipe(
        select(breedSelectors.getSelectedOptions)
    );

    public readonly filteredCategories$: Observable<string[]> = this.store.pipe(
        select(breedSelectors.filteredCategories)
    );

    constructor(private readonly store: Store<BreedState>) {
    }

    public init() {
        this.store.dispatch(breedActions.Init());
    };

    public loadBreeds() {
        this.store.dispatch(breedActions.LoadBreeds());
    };

    public addSearchValue(search: string) {
        this.store.dispatch(breedActions.AddSearchValue({search}));
    };

    public addCategoryOptions(categories: string[]) {
        this.store.dispatch(breedActions.AddCategoryOptions({categories}))
    };

    public AddSelectedOption(category: string[]) {
        this.store.dispatch(breedActions.AddSelectedOption({category}))
    };

}