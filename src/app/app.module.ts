import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
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

@NgModule({
    declarations: [
        AppComponent,
        BreedListComponent,
        BreedCardComponent,
        BreedPageComponent,
        BreedSearchComponent,
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
        MatPaginatorModule
    ],
    providers: [BreedStateFacade],
    bootstrap: [AppComponent]
})
export class AppModule {
}
