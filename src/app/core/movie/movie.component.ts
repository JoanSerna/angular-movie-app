import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'joanserna-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
