import {Component, OnInit} from '@angular/core';
import {Breed} from "../../modules/breed";
import {BreedStateFacade} from "../../facade/breed-state-facade";
import {filter, switchMap} from "rxjs";

@Component({
  selector: 'app-breed-page',
  templateUrl: './breed-page.component.html',
  styleUrls: ['./breed-page.component.css']
})
export class BreedPageComponent implements OnInit {
  searchInput: string = '';
  breedList: Breed[] = [];
  constructor( private readonly breedFacade: BreedStateFacade) { }

  ngOnInit(): void {
    this.breedFacade.loadBreeds();
    this.breedFacade.loaded$
        .pipe(
            filter((isLoaded: boolean) => isLoaded),
            switchMap(() => this.breedFacade.allBreeds$)
        )
        .subscribe((breeds: Breed[]) => {
          this.breedList = breeds;
        });
  }

  addSearchText(value: string) {
    this.searchInput = value;
  }
}
