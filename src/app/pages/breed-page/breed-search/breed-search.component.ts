import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-breed-search',
  templateUrl: './breed-search.component.html',
  styleUrls: ['./breed-search.component.css']
})
export class BreedSearchComponent implements OnInit {
  @Output() valueEmitter: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.valueEmitter.subscribe(value =>
        this.searchText = value.toString())
  }

  addNewItem(event: any) {
    this.valueEmitter.emit(event);
  }
}
