import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cinemapp-errors',
  template: `
    <ul *ngIf="errors.length">
      <li *ngFor="let error of errors">{{error}}</li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorsComponent {

  @Input() errors: string[] = [];

}
