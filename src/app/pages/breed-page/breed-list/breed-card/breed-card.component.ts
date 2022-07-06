import { Component, OnInit, Input, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Breed } from '../../../../modules/breed';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit {
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: Breed) {  }

  ngOnInit(): void {
  }

}
