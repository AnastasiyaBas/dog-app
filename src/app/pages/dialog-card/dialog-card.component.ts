import { Component, OnInit, Input, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Breed } from '../../modules/interface';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {
  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: Breed) {  }

  ngOnInit(): void {
  }

}
