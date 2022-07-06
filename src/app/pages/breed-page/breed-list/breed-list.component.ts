import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Breed } from '../../../modules/breed';
import { BreedsService } from '../../../services/breeds.service';
import { BreedCardComponent } from './breed-card/breed-card.component';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.css']
})
export class BreedListComponent implements OnInit {
  @Input() searchText: string = '';
  breedList: Breed[] = [];

  constructor( private breedsService:  BreedsService,
               public dialog: MatDialog) {}

  ngOnInit(): void {
    this.breedsService.dogList.subscribe(item => {
      this.breedList = item
    })
  }

  openDialog(item: Breed) {
    this.dialog.open(BreedCardComponent, {data: item});
  }

}