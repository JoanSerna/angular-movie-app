import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadMoviesFailure,
  loadMoviesSuccess,
  loadMovieDetailSuccess,
  loadMovieDetailFailure,
} from '../actions/movie.actions';
import { SearchMovieService } from './../../services/search-movie.service';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movie] Load Movies'),
      mergeMap((action: { type: string; title: string }) =>
        this.searchMovieService.searchMovieByTitle(action.title).pipe(
          map((httpResponse) =>
            loadMoviesSuccess({
              movies: httpResponse.body?.Search,
              totalResults: httpResponse.body?.totalResults,
            })
          ),
          catchError((error) =>
            of(loadMoviesFailure(JSON.parse(JSON.stringify(error))))
          )
        )
      )
    )
  );
  loadMovieDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movie] Load Movie Detail'),
      mergeMap((action: { type: string; imdbID: string | null }) =>
        this.searchMovieService.getMovieByIMDb(action.imdbID).pipe(
          map((httpResponse) =>
            loadMovieDetailSuccess({
              movie: httpResponse.body,
            })
          ),
          catchError((error) =>
            of(loadMovieDetailFailure(JSON.parse(JSON.stringify(error))))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private searchMovieService: SearchMovieService
  ) {}
}
