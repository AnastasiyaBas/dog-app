import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BreedListComponent } from './pages/breed-page/breed-list/breed-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BreedCardComponent } from './pages/breed-page/breed-list/breed-card/breed-card.component';
import { BreedPageComponent } from './pages/breed-page/breed-page.component';
import { BreedSearchComponent } from './pages/breed-page/breed-search/breed-search.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {BreedsEffects} from "./store/breed.effects";
import {BREED_FEATURE_KEY} from "./store/breed.state";
import {reducer} from "./store/breed.reducer";
import {BreedStateFacade} from "./facade/breed-state-facade";

@NgModule({
  declarations: [
    AppComponent,
    BreedListComponent,
    FilterPipe,
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
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [BreedStateFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
