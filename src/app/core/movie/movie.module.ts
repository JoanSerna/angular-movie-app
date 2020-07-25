import { MovieEffects } from './store/effects/movie.effects';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { ToolbarComponent } from '../layout/toolbar/toolbar.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import * as fromMovie from './store/reducers/movie.reducer';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    MovieComponent,
    SearchMovieComponent,
    MovieListComponent,
    MovieItemComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MovieRoutingModule,
    StoreModule.forFeature(fromMovie.movieFeatureKey, fromMovie.reducer),
    EffectsModule.forFeature([MovieEffects]),
  ],
})
export class MovieModule {}
