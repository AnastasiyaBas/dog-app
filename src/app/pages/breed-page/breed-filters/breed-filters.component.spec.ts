import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedFiltersComponent } from './breed-filters.component';

describe('BreedFiltersComponent', () => {
  let component: BreedFiltersComponent;
  let fixture: ComponentFixture<BreedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
