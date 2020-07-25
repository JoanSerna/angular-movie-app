import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { loadMovies } from './../store/actions/movie.actions';
@Component({
  selector: 'joanserna-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMovieComponent implements OnInit {
  formSearchMovie: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.buildFormSearchMovie();
  }
  private buildFormSearchMovie(): void {
    this.formSearchMovie = this.fb.group({
      movie: new FormControl(
        '',
        Validators.compose([Validators.minLength(3), Validators.required])
      ),
    });
  }
  onSearchMovie(): void {
    if (this.formSearchMovie.valid) {
      const { movie } = this.formSearchMovie.value;
      this.store.dispatch(loadMovies({ title: movie }));
      console.log(movie);
    }
  }
}
