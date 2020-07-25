import { Movie } from './../models/movie';
import { AppState } from './../../../reducers/index';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { loadMovieDetail } from '../store/actions/movie.actions';
import { Observable, of } from 'rxjs';
import {
  selectStateMovie,
  selectMovieSelected,
} from '../store/selectors/movie.selectors';

@Component({
  selector: 'joanserna-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<Movie | null> = of();
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const imdbID = params.get('id');
      this.store.dispatch(loadMovieDetail({ imdbID }));
      this.movie$ = this.store.pipe(select(selectMovieSelected));
    });
  }
}
