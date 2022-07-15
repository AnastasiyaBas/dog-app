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
    private destroyed$: Subject<boolean> = new Subject<boolean>();

    constructor(
        public readonly breedFacade: BreedStateFacade,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.breedFacade.loadBreeds();
        this.route.queryParams.pipe(
            map((p: Params) => p[this.searchKey]),
            takeUntil(this.destroyed$)
        ).subscribe((search: string) => {
            this.breedFacade.addSearchValue(search);
        });

    }

    unique(arr: string[]) {
        let result: any[] = [];

        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }

        return result;
    }

    searchText(value: string) {
        this.router.navigate([''], {
            relativeTo: this.route,
            queryParams: {
                [this.searchKey]: value
            }
        });
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
