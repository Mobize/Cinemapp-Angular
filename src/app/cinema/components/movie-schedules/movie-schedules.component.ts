import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Schedule } from '../../shared/schedule';

@Component({
  selector: 'cinemapp-movie-schedules',
  template: `
  <div id="schedules">
    <div *ngFor="let schedulesGroup of schedulesGroups">
      <cinemapp-schedules [schedules]="schedulesGroup">
        <p>{{schedulesGroup[0].theater.title}}</p>
      </cinemapp-schedules>
    </div>
  </div>
  `,
  styleUrls: ['../schedules/schedules.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSchedulesComponent {

  @Input() schedulesGroups: Schedule[][] = [];

}
