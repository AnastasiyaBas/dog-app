import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-breed-filters',
    templateUrl: './breed-filters.component.html',
    styleUrls: ['./breed-filters.component.css']
})
export class BreedFiltersComponent implements OnInit {
    categoryKey = 'category';
    selectedCategoryOptions: string[] = [];
    categories: string[] = [];
    formControl = new FormControl('');

    @Input()
    set categoryOptions(v: string[] | null) {
        this.categories = v ? v : [];
    }

    @Input()
    set selectedOptions(v: string[] | null) {
        this.selectedCategoryOptions = v ? v : [];
    }

    @Output() valueEmitter = new EventEmitter<string[]>();


    constructor() {
    }

    ngOnInit(): void {
    }

    removeSelectedOption(value: string) {
        console.log('selected after removing', this.selectedCategoryOptions)
        this.emitValue(this.selectedCategoryOptions.filter(category =>
            category !== value
        ));
        console.log('selected before removing', this.selectedCategoryOptions)
    };

    selectOption(value: string) {
        console.log('select option', this.selectedCategoryOptions)
        this.formControl.setValue('');
        this.emitValue([...this.selectedCategoryOptions, value]);
    };

    emitValue(value: string[]) {
        this.valueEmitter.emit(value);
    };
}
