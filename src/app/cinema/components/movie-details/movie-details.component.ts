import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Movie } from '../../shared/movie';

/** @todo Configure this component with OnPush change detection */
@Component({
  selector: 'cinemapp-movie-details',
  template: `
    <article>
      <mat-card>
        <iframe [src]="sanitizer.bypassSecurityTrustResourceUrl(movie.videoSrc)" mat-card-image></iframe>
        <mat-card-title>{{movie.title}}</mat-card-title>
        <mat-card-content>{{movie.summary}}</mat-card-content>
      </mat-card>
    </article>
  `
})
export class MovieDetailsComponent {

  @Input() movie: Movie;

  constructor(public sanitizer: DomSanitizer) {}

}
