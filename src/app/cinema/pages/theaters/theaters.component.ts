import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchOffline } from '@ngx-pwa/offline';

import { Theater } from '../../shared/theater';
import { CinemaService } from '../../shared/cinema.service';

@Component({
  template: `
    <div>
      <cinemapp-theaters-list *ngIf="theaters$ | async as theaters; else loading" [theaters]="theaters"></cinemapp-theaters-list>
      <ng-template #loading>
        <div class="center"><mat-progress-spinner mode="indeterminate" *ngIf="!theaters"></mat-progress-spinner></div>
      </ng-template>
    </div>
  `
})
export class TheatersComponent implements OnInit {

  theaters$: Observable<Theater[]>;

  constructor(protected cinema: CinemaService) { }

  ngOnInit() {

    this.theaters$ = this.cinema.getTheaters().pipe(catchOffline());

  }

}
