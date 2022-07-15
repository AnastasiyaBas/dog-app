import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-breed-search',
    templateUrl: './breed-search.component.html',
    styleUrls: ['./breed-search.component.css']
})
export class BreedSearchComponent implements OnInit {
    @Input()
    set initialValue(v: string | null) {
        this.formControl.setValue(v);
    }

    @Output() valueEmitter: EventEmitter<string> = new EventEmitter<string>();
    searchText: string = '';

    formControl = new FormControl('');

    private destroyed$: Subject<boolean> = new Subject<boolean>();

    constructor() {
    }

    ngOnInit(): void {
        this.formControl.valueChanges.pipe(
            debounceTime(400),
            takeUntil(this.destroyed$)
        ).subscribe((value: string) => {
            this.valueEmitter.emit(value);
        })
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
