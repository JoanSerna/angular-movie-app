import { Search } from './../models/search-movie';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'joanserna-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Search = {} as Search;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {}
  redirect(imdbID: string): void {
    this.router.navigate([`detail/${imdbID}`], {
      relativeTo: this.activatedRoute,
    });
  }
}
