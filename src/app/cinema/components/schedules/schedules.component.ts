import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Schedule } from '../../shared/schedule';

@Component({
  selector: 'cinemapp-schedules',
  template: `
    <mat-card>
      <ng-content></ng-content>
      <mat-card-actions>
        <a mat-raised-button color="accent" *ngFor="let schedule of schedules"
        (click)="book(schedule.id)">{{schedule.hour}}</a>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./schedules.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchedulesComponent {

  @Input() schedules: Schedule[] = [];

  constructor(protected router: Router) {}

  book(schedule: number) {

    this.router.navigate(['/account/profile'], {
      queryParams: { schedule }
    });

  }

}
