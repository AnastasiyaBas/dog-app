import { Component, Input, OnInit } from '@angular/core';
import { Breed } from '../../modules/interface';
import { BreedsService } from '../../services/breeds.service';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit {
  title = 'dog-app';
  breedList: Breed[] = [];
  @Input() searchText: string = '';


  constructor( private breedsService:  BreedsService){}


  ngOnInit(): void {
    this.breedsService.dogList.subscribe(item => {
      this.breedList = item
    })
  }

}