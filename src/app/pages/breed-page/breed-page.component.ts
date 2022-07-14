import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreedStateFacade} from "../../facade/breed-state-facade";
import {Breed} from "../../modules/breed";

@Component({
    selector: 'app-breed-page',
    templateUrl: './breed-page.component.html',
    styleUrls: ['./breed-page.component.css']
})
export class BreedPageComponent implements OnInit {
    breedList$: Observable<Breed[]> = this.breedFacade.BreedList();

    constructor(private readonly breedFacade: BreedStateFacade) {
    }

    ngOnInit(): void {
        this.breedFacade.loadBreeds();
    }

    addSearchText(value: string) {
        this.breedFacade.addSearchValue(value)
    }
}
