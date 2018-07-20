import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Movie } from '../../shared/movie';

@Component({
  selector: 'cinemapp-movies-item',
  template: `
    <article>
      <mat-card>
        <a [routerLink]="movie.id"><img [src]="movie.imgSrc" [alt]="movie.title" mat-card-image></a>
        <mat-card-title><a [routerLink]="movie.id">{{movie.title}}</a></mat-card-title>
      </mat-card>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesItemComponent {

  @Input() movie: Movie;

}
