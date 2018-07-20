import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Movie } from '../../shared/movie';

@Component({
  selector: 'cinemapp-movies-list',
  template: `
    <div id="movies-list">
      <cinemapp-movies-item *ngFor="let movie of movies" [movie]="movie"></cinemapp-movies-item>
    </div>
  `,
  styleUrls: ['./movies-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent {

  @Input() movies: Movie[];

}
