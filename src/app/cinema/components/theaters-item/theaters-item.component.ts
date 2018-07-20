import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Theater } from '../../shared/theater';

@Component({
  selector: 'cinemapp-theaters-item',
  template: `
    <article>
      <mat-card>
        <mat-card-header>
          <img [src]="theater.logoSrc" [alt]="theater.title" mat-card-avatar>
          <mat-card-title><a [routerLink]="theater.id">{{theater.title}}</a></mat-card-title>
          <mat-card-subtitle>{{theater.address}}</mat-card-subtitle>
        </mat-card-header>
      </mat-card>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheatersItemComponent {

  @Input() theater: Theater;

}
