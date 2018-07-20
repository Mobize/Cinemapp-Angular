import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Schedule } from '../../shared/schedule';

@Component({
  selector: 'cinemapp-theater-schedules',
  template: `
    <div id="schedules">
      <div *ngFor="let schedulesGroup of schedulesGroups">
        <cinemapp-schedules [schedules]="schedulesGroup">
          <img [src]="schedulesGroup[0].movie.imgSrc" [alt]="schedulesGroup[0].movie.title" mat-card-image>
          <p>{{schedulesGroup[0].movie.title}}</p>
        </cinemapp-schedules>
      </div>
    </div>
  `,
  styleUrls: ['../schedules/schedules.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheaterSchedulesComponent {

  @Input() schedulesGroups: Schedule[][] = [];

}
