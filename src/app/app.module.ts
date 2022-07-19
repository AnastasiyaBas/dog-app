import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from "@angular/material/chips";
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BreedStateFacade} from "./facade/breed-state-facade";
import {BreedCardComponent} from './pages/breed-page/breed-list/breed-card/breed-card.component';
import {BreedListComponent} from './pages/breed-page/breed-list/breed-list.component';
import {BreedPageComponent} from './pages/breed-page/breed-page.component';
import {BreedSearchComponent} from './pages/breed-page/breed-search/breed-search.component';
import {BreedsEffects} from "./store/breed.effects";
import {reducer} from "./store/breed.reducer";
import {BREED_FEATURE_KEY} from "./store/breed.state";
import {BreedFiltersComponent} from './pages/breed-page/breed-filters/breed-filters.component';
import {
    BreedCategoryFilterComponent
} from './pages/breed-page/breed-filters/breed-category-filter/breed-category-filter.component';

@NgModule({
    declarations: [
        AppComponent,
        BreedListComponent,
        BreedCardComponent,
        BreedPageComponent,
        BreedSearchComponent,
        BreedFiltersComponent,
        BreedCategoryFilterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDialogModule,
        StoreModule.forRoot({}, {}),
        StoreModule.forFeature(BREED_FEATURE_KEY, reducer),
        EffectsModule.forRoot([BreedsEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        MatPaginatorModule,
        MatAutocompleteModule,
        MatIconModule,
        MatChipsModule

    ],
    providers: [BreedStateFacade],
    bootstrap: [AppComponent]
})
export class AppModule {
}
