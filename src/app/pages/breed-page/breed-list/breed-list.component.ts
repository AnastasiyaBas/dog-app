import {Component, Input} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Breed} from '../../../modules/breed';
import {BreedCardComponent} from './breed-card/breed-card.component';

@Component({
    selector: 'app-breed-list',
    templateUrl: './breed-list.component.html',
    styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent {
    myBreedList: Breed[] = [];

    @Input() set breedList(value: Breed[] | null) {
        this.myBreedList = value ? value : [];
    }
    
    constructor(public dialog: MatDialog) {
    }

    openDialog(item: Breed) {
        this.dialog.open(BreedCardComponent, {data: item});
    }
}