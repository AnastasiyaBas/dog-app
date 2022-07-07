import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Breed } from '../../../modules/breed';
import { BreedCardComponent } from './breed-card/breed-card.component';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {
  @Input() breedList: Breed[] = [];
  @Input() searchText: string = '';

  constructor( public dialog: MatDialog ) {}

  ngOnInit(): void {}

  openDialog(item: Breed) {
    this.dialog.open(BreedCardComponent, {data: item});
  }
}