import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { catchOffline } from '@ngx-pwa/offline';

import { Theater } from '../../shared/theater';
import { Schedule } from '../../shared/schedule';
import { CinemaService } from '../../shared/cinema.service';

@Component({
  template: `
    <div>
      <div *ngIf="theater$ | async as theater; else loading">
        <cinemapp-theaters-item [theater]="theater"></cinemapp-theaters-item>
        <cinemapp-theater-schedules [schedulesGroups]="theater.schedulesGroups"></cinemapp-theater-schedules>
      </div>
      <ng-template #loading>
        <div class="center"><mat-progress-spinner mode="indeterminate"></mat-progress-spinner></div>
      </ng-template>
    </div>
  `
})
export class TheaterComponent implements OnInit {

  theater$: Observable<Theater>;

  constructor(protected cinema: CinemaService, protected route: ActivatedRoute) { }

  ngOnInit() {

    this.theater$ = this.route.paramMap.pipe(
      map((params) => Number.parseInt(params.get('id') || '1', 10)),
      switchMap((id) => this.cinema.getTheater(id)),
      catchOffline()
    );

  }

}
