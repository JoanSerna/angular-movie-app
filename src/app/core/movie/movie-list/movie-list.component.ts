import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from './../../../reducers/index';
import { Search } from './../models/search-movie';
import {
  selectAllMovies,
  selectStateMovie,
} from './../store/selectors/movie.selectors';

@Component({
  selector: 'joanserna-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Search[]> = of([]);
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.movies$ = this.store.pipe(
      select(selectStateMovie),
      select(selectAllMovies)
    );
  }
}
