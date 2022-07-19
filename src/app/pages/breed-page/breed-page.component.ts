import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {map, Subject, takeUntil} from "rxjs";
import {BreedStateFacade} from "../../facade/breed-state-facade";

@Component({
    selector: 'app-breed-page',
    templateUrl: './breed-page.component.html',
    styleUrls: ['./breed-page.component.css']
})
export class BreedPageComponent implements OnInit, OnDestroy {
    searchKey = 'search';
    categoryKey = 'category';
    private destroyed$: Subject<boolean> = new Subject<boolean>();

    constructor(
        public readonly breedFacade: BreedStateFacade,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.breedFacade.loadBreeds();
        this.breedFacade.categoryList$.subscribe((categories: string[]) => {
            this.breedFacade.addCategoryOptions(categories);
        });

        this.route.queryParams.pipe(
            map((p: Params) => p[this.searchKey]),
            takeUntil(this.destroyed$)
        ).subscribe((search: string) => {
            search ? this.breedFacade.addSearchValue(search) : null;
        });

        this.route.queryParams.pipe(
            map((p: Params) => p[this.categoryKey]),
            takeUntil(this.destroyed$)
        ).subscribe(category => {
            category ? this.breedFacade.AddSelectedOption(JSON.parse(category)) : null;
        });
    }

    searchText(value: string) {
        this.router.navigate([''], {
            relativeTo: this.route,
            queryParams: {
                [this.searchKey]: value
            },
            queryParamsHandling: 'merge'
        });
    }

    selectedCategory(value: string[]) {
        const newArr = JSON.stringify(value);
        this.router.navigate([''], {
            relativeTo: this.route,
            queryParams: {
                [this.categoryKey]: newArr,
            },
            queryParamsHandling: 'merge'
        });
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
