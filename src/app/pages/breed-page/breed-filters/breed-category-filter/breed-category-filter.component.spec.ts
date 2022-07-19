import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedCategoryFilterComponent } from './breed-category-filter.component';

describe('BreedCategoryFilterComponent', () => {
  let component: BreedCategoryFilterComponent;
  let fixture: ComponentFixture<BreedCategoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedCategoryFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedCategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
