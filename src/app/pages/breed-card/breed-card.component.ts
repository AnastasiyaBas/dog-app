import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Breed } from '../../modules/interface';
import { BreedsService } from '../../services/breeds.service';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit {
  breedList: Breed[] = [];
  @Input() searchText: string = '';


  constructor( private breedsService:  BreedsService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.breedsService.dogList.subscribe(item => {
      this.breedList = item
    })
  }

  openDialog(item: Breed) {
    
    this.dialog.open(DialogCardComponent, {data: item});
  }

}