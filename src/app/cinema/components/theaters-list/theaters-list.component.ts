import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Theater } from '../../shared/theater';

@Component({
  selector: 'cinemapp-theaters-list',
  template: `
    <div>
      <cinemapp-theaters-item *ngFor="let theater of theaters" [theater]="theater"></cinemapp-theaters-item>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TheatersListComponent {

  @Input() theaters: Theater[];

}
